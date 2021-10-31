module.exports = {
  "import/no-deprecated": "off",
  "import/namespace": "off",
  "decorator-position/decorator-position": [
    "warn",
    {
      "printWidth": 120,
      "properties": "prefer-inline",
      "methods": "above"
    }
  ],
  "max-depth": [
    "error",
    6
  ],
  "max-nested-callbacks": [
    "error",
    3
  ],
  "max-len": [
    "error",
    {
      "code": 140,
      "tabWidth": 2,
      "ignoreRegExpLiterals": true,
      "ignorePattern": "^import\\s+.+;$"
    }
  ],
  "no-nested-ternary": [
    "warn",
  ],
  "no-multiple-empty-lines": [
    "error",
    {
      "max": 1,
      "maxEOF": 1
    }
  ],
  "@angular-eslint/no-input-rename": [
    "warn"
  ],
  "@angular-eslint/component-selector": [
    "error",
    {
      "type": "element",
      "prefix": "nmap",
      "style": "kebab-case"
    }
  ],
  "@angular-eslint/directive-selector": [
    "error",
    {
      "type": "attribute",
      "prefix": "nmap",
      "style": "camelCase"
    }
  ],
  "@typescript-eslint/switch-exhaustiveness-check": [
    "error"
  ],
  "@typescript-eslint/unbound-method": [
    "error",
    {
      "ignoreStatic": true
    }
  ],
  "@typescript-eslint/restrict-template-expressions": [
    "warn",
    {
      "allowNumber": true,
      "allowBoolean": true,
      "allowNullish": true
    }
  ],
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-floating-promises": "off",
  "@typescript-eslint/no-misused-promises": "off",
  "@typescript-eslint/consistent-type-definitions": "error",
  "@typescript-eslint/dot-notation": "off",
  "@typescript-eslint/explicit-member-accessibility": [
    "error",
    {
      "accessibility": "explicit",
      "overrides": {
        "accessors": "explicit",
        "constructors": "no-public",
        "methods": "explicit",
        "properties": "explicit",
        "parameterProperties": "explicit"
      }
    }
  ],
  "@typescript-eslint/no-inferrable-types": [
    "off",
    {
      "ignoreParameters": true
    }
  ],
  "@typescript-eslint/member-ordering": [
    "warn",
    {
      "default": [
        // Index signature
        "signature",
        // Fields
        "public-static-field",
        "protected-static-field",
        "private-static-field",
        "private-decorated-field",
        "protected-decorated-field",
        "public-decorated-field",
        "private-instance-field",
        "protected-instance-field",
        "public-instance-field",
        "private-abstract-field",
        "protected-abstract-field",
        "public-abstract-field",
        // Constructors
        "public-constructor",
        "protected-constructor",
        "private-constructor",
        // Methods
        "private-static-method",
        "protected-static-method",
        "public-static-method",
        "private-decorated-method",
        "protected-decorated-method",
        "public-decorated-method",
        "private-instance-method",
        "protected-instance-method",
        "public-instance-method",
        "private-abstract-method",
        "protected-abstract-method",
        "public-abstract-method"
      ]
    }
  ],
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "default",
      "format": null,
      "leadingUnderscore": "allow",
      "trailingUnderscore": "forbid"
    },
    {
      "selector": "variable",
      "format": [
        "camelCase",
        "UPPER_CASE",
        "PascalCase"
      ],
      "leadingUnderscore": "allow",
      "trailingUnderscore": "forbid"
    },
    {
      "selector": "typeLike",
      "format": [
        "PascalCase"
      ]
    },
    {
      "selector": "enumMember",
      "format": [
        "UPPER_CASE"
      ]
    },
    {
      "selector": "memberLike",
      "modifiers": [
        "readonly"
      ],
      "format": [
        "camelCase",
        "UPPER_CASE",
        "PascalCase"
      ],
      "leadingUnderscore": "allow",
      "trailingUnderscore": "forbid"
    }
  ],
  "@typescript-eslint/member-delimiter-style": [
    "error",
    {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false
      }
    }
  ],
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": [
    "error"
  ],
  "brace-style": "off",
  "id-blacklist": "off",
  "id-match": "off",
  "no-underscore-dangle": "off",
  "padding-line-between-statements": [
    "error",
    {
      "blankLine": "always",
      "prev": "*",
      "next": "return"
    }
  ],
  "prefer-arrow/prefer-arrow-functions": [
    "error",
    {
      "allowStandaloneDeclarations": true
    }
  ],
  "rxjs/no-internal": "error",
  "rxjs/no-sharereplay": [
    "error",
    {
      "allowConfig": true
    }
  ],
  "rxjs/no-unsafe-takeuntil": "error",
  "rxjs/finnish": [
    "error",
    {
      "functions": false,
      "methods": false,
      "names": {
        "^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$": false
      },
      "parameters": true,
      "properties": true,
      "strict": false,
      "types": {
        "^EventEmitter$": false,
        "^\S*Subject$": false
      },
      "variables": true
    }
  ],
  "rxjs/suffix-subjects": [
    "error",
    {
      "parameters": true,
      "properties": true,
      "suffix": "Subject",
      "types": {
        "^EventEmitter$": false,
      },
      "variables": true,
    }
  ],
};
