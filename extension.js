const vscode = require("vscode");
const fs = require("fs");

const snippetsArr = {
  ...getJson("/src/snippets/snippets.json"),
  ...getJson("/src/snippets/salla.snippets.json"),
  ...getJson("/src/hover/salla.filters.json"),
  ...getJson("/src/hover/filters.json"),
  ...getJson("/src/hover/salla.functions.json"),
};

const functionsArr = getJson("/src/hover/functions.json");
const twigArr = getJson("/src/hover/twig.json");

const DOC_URL = "https://docs.salla.dev/";
const hooks = getJson("/src/SallaJson/hooks.json");

// change this based on package.json
const config = vscode.workspace.getConfiguration("@salla.sa/twig-theme-one");

function getJson(relativePath) {
  let file = fs.readFileSync(__dirname + relativePath, "utf8");
  return JSON.parse(file);
}

function createHover(snipet, type) {
  let example = typeof snipet.example == "undefined" ? "" : snipet.example;
  let description =
    typeof snipet.description == "undefined" ? "" : snipet.description;
  return new vscode.Hover({
    language: type || "html",
    value: description + "\n\n" + example,
  });
}

function activate(context) {
  const active = vscode.window.activeTextEditor;
  if (!active || !active.document) return;

  registerDocType("html");
  function registerDocType(type) {
    // hover

    if (config.hover === true) {
      context.subscriptions.push(
        vscode.languages.registerHoverProvider(type, {
          provideHover(document, position) {
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);

            for (const snippet in snippetsArr) {
              if (
                snippetsArr[snippet].prefix == word ||
                snippetsArr[snippet].hover == word
              ) {
                return createHover(snippetsArr[snippet], type);
              }
            }

            for (const snippet in functionsArr) {
              if (
                functionsArr[snippet].prefix == word ||
                functionsArr[snippet].hover == word
              ) {
                return createHover(functionsArr[snippet], type);
              }
            }

            for (const snippet in twigArr) {
              if (
                twigArr[snippet].prefix == word ||
                twigArr[snippet].hover == word
              ) {
                return createHover(twigArr[snippet], type);
              }
            }
            // we can add description for every salla object in /data/[object].json here
            ///
          },
        })
      );
    }

    // filters

    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(
        "html",
        {
          provideCompletionItems(document, position) {
            let start = new vscode.Position(position.line, 0);
            let range = new vscode.Range(start, position);
            let text = document.getText(range);
            let completionItems = [];

            if (text[text.length - 1] != "|") return [];

            for (let snipet in snippetsArr) {
              if (typeof snippetsArr[snipet].text != "undefined") {
                let description =
                  typeof snippetsArr[snipet].description == "undefined"
                    ? ""
                    : snippetsArr[snipet].description;
                let example =
                  typeof snippetsArr[snipet].example == "undefined"
                    ? ""
                    : "\n\n" + snippetsArr[snipet].example;

                let item = new vscode.CompletionItem(snipet);
                item.kind = vscode.CompletionItemKind.Function;
                item.detail = snippetsArr[snipet].description;
                item.documentation = description + example;
                item.insertText = snippetsArr[snipet].text;

                completionItems.push(item);
              }
            }

            return completionItems;
          },
          resolveCompletionItem(item) {
            return item;
          },
        },
        "|"
      )
    );

    // components
    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(type, {
        provideCompletionItems() {
          let components = getJson("/src/SallaJson/components.json");
          const snippetCompletion = new vscode.CompletionItem(
            "{% component [Salla.Component] %}"
          );
          snippetCompletion.insertText = new vscode.SnippetString(
            "{% component '${1|" + components + "|}' %}"
          );
          const docs = new vscode.MarkdownString(
            "Select your Salla Component from the list below"
          );
          snippetCompletion.documentation = docs;
          docs.baseUri = vscode.Uri.parse(DOC_URL);

          // return all completion items as array
          return [snippetCompletion];
        },
      })
    );

    // hooks
    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(type, {
        provideCompletionItems() {
          const snippetCompletion = new vscode.CompletionItem(
            "{% hook '[Salla.Hook]' %}"
          );
          snippetCompletion.insertText = new vscode.SnippetString(
            "{% hook '${1|" + hooks + "|}' %}"
          );
          const docs = new vscode.MarkdownString(
            "Select your Salla Hook from the list below"
          );
          snippetCompletion.documentation = docs;
          docs.baseUri = vscode.Uri.parse(DOC_URL);

          // return all completion items as array
          return [snippetCompletion];
        },
      })
    );

    // data
    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(type, {
        provideCompletionItems() {
          let JSONs = [];
          let files = fs.readdirSync(__dirname + "/src/SallaJson/data/");

          for (let i = 0; i < files.length; i++)
            JSONs.push(
              ...getSnippetFromObject(
                files[i].replace(".json", ""),
                getJson("/src/SallaJson/data/" + files[i])
              )
            );

          // return all completion items as array
          return [...JSONs];
        },
      })
    );
  }
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;

function getObjectProperties(obj) {
  let keys = [];
  for (let o in obj) {
    if (obj.hasOwnProperty(o)) {
      // DON'T REMOVE THIS .. WE'LL NEED IT IF WE NEEDED TO HAVE THE NASTED OBJECT
      /*if (typeof obj[o] === "object") {
        keys.push({ [o]: getObjectProperties(obj[o]) });
      } else {
        keys.push(o);
      }*/
      keys.push(o);
    }
  }
  return keys;
}

function getSnippetFromObject(name, obj) {
  let arr = getObjectProperties(obj);
  if (name === "global") return getSnippetFromArray(arr);

  const snippetCompletion = new vscode.CompletionItem(" " + name);

  snippetCompletion.insertText = new vscode.SnippetString(
    name + ".${1|" + arr + "|}"
  );
  const docs = new vscode.MarkdownString(
    "Select your Salla Ojbect Property from the list below"
  );
  snippetCompletion.kind = vscode.CompletionItemKind.Property;
  snippetCompletion.label = "Salla " + name;
  snippetCompletion.documentation = docs;
  docs.baseUri = vscode.Uri.parse(DOC_URL);
  return [snippetCompletion];
}

function getSnippetFromArray(arr) {
  return arr.map((a) => {
    const snippetCompletion = new vscode.CompletionItem(a);
    snippetCompletion.insertText = new vscode.SnippetString(a);

    snippetCompletion.label = a;

    return snippetCompletion;
  });
}
