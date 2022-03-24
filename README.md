# Welcome to Salla twig theme one autocomplete vscode extension

## how to run

to run the extension just clone this repo then open the repo in vscode and (press F5) it will open another window to test your ext .
after that you can create a (\*.twig) file inside the development window then start writing your code to test salla vscode extension

## structure

### Folder hover

filters.json : define a range of filter functions
functions.json : define a range of useful functions
salla.functions.json : define a range of useful salla functions

### Folder SallaJson/data

define a set of predefined data structure to use with salla twig theme

### Folder SallaJson/web.components

define a set of pre defined web.components to use with salla twig theme (when adding a new web component you need to add it to the json file with properties)

```
.
├── hover
│   ├── filters.json
│   ├── functions.json
│   ├── salla.filters.json
│   └── twig.json
├── languages
│   └── twig.configuration.json
├── SallaJson
│   ├── components.json
│   ├── data
│   │   ├── advertisement.json
│   │   ├── brand.json
│   │   ├── cartItem.json
│   │   ├── cart.json
│   │   ├── category.json
│   │   ├── contact.json
│   │   ├── currency.json
│   │   ├── ...
│   ├── hooks.json
│   ├── snippets.twig
│   │   └── form.twig
│   │   └── ...
│   └── web.components
│       └── web-components.html-data.json
├── snippets
│   ├── salla.snippets.json
│   └── snippets.json
└── syntaxes
    └── twig.tmLanguage
```

**Enjoy!**
