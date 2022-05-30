import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/extension.js",
    output: {
      file: "dist/extension.js",
      format: "cjs",
      plugins: [terser()],
    },
    plugins: [
      json({
        // All JSON files will be parsed by default,
        // but you can also specifically include/exclude files
        exclude: ["node_modules/**"],

        // for tree-shaking, properties will be declared as
        // variables, using either `var` or `const`
        preferConst: true, // Default: false

        // specify indentation for the generated default export —
        // defaults to '\t'
        indent: "  ",

        // ignores indent and generates the smallest code
        compact: true, // Default: false

        // generate a named export for every property of the JSON object
        namedExports: true, // Default: true
      }),
    ],
  },
];
