module.exports = {
  root: true,
  ignorePatterns: [
    "projects/**/*",
    "node_modules/**/*",
    "dist/**/*",
    "documentation/**/*",
    "src/**/*.spec.ts",
    "src/index.html",
    "stylelint-formatter.js",
  ],
  overrides: [
    {
      files: ["src/**/*.ts"],
      parserOptions: {
        tsconfigRootDir: ".",
        project: "tsconfig.json",
        createDefaultProgram: false,
      },
      extends: [
        "plugin:import/typescript",
        "plugin:@angular-eslint/ng-cli-compat",
        "plugin:@angular-eslint/ng-cli-compat--formatting-add-on",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/recommended",
        "prettier",
      ],
      plugins: ["eslint-plugin-rxjs", "eslint-plugin-decorator-position"],
      rules: require("./.eslint-shared-rules"),
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: "./tsconfig.app.json",
          }
        },
      },
    },
    {
      files: ["*.component.html"],
      parser: "@angular-eslint/template-parser",
      plugins: ["@angular-eslint/template"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "@angular-eslint/template/no-negated-async": "off",
      },
    },
  ],
};
