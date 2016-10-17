module.exports = {

  "extends": "eslint:recommended",

  "rules": {
    "arrow-body-style": [
      2,
      "always"
    ],
    "arrow-parens": [
      2,
      "always"
    ],
    "arrow-spacing": [
      2,
      {
        "before": true,
        "after": true
      }
    ],
    "block-scoped-var": [
      2
    ],
    "block-spacing": [
      2
    ],
    "brace-style": [
      1,
      "stroustrup"
    ],
    "camelcase": [
      1
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "comma-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      2,
      "last"
    ],
    "computed-property-spacing": [
      2,
      "never"
    ],
    "complexity": [
      2,
      20
    ],
    "consistent-return": 0,
    "dot-location": [
      1,
      "property"
    ],
    "eol-last": 0,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "keyword-spacing": 2,
    "max-depth": [
      2,
      3
    ],
    "max-nested-callbacks": [
      1,
      3
    ],
    "max-params": [
      2,
      3
    ],
    "new-cap": [
      2,
      {
        "properties": false, // E.g. $.Deferred()
      }
    ],
    "new-parens": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-cond-assign": 2,
    "no-console": 1,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 1,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-label": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": [
      1,
      {
        "ignore": [
          -1,
          0,
          1,
          2
        ]
      }
    ],
    "no-mixed-spaces-and-tabs": [
      2,
      "smart-tabs"
    ],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 2,
    "no-obj-calls": 2,
    "no-plusplus": 1,
    "no-regex-spaces": 2,
    "no-return-assign": 2,
    "no-self-compare": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-use-before-define": 1,
    "no-unused-vars": [
      2,
      {
        "args": "none"
      }
    ],
    "no-with": 2,
    "object-curly-spacing": [
      2,
      "always"
    ],
    "object-shorthand": [
      2,
      "never"
    ],
    "one-var": [
      2,
      "never"
    ],
    "quote-props": [
      2,
      "consistent",
      {
        "keywords": true
      }
    ],
    "quotes": [
      1,
      "single"
    ],
    "radix": 2,
    "semi": [
      2,
      "always"
    ],
    "semi-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "space-before-blocks": 2,
    "space-before-function-paren": [
      1,
      {
        "anonymous": "always",
        "named": "never"
      }
    ],
    "space-infix-ops": [
      2,
      {
        "int32Hint": false
      }
    ],
    "space-unary-ops": 2,
    "use-isnan": 2,
    "valid-jsdoc": [
      1,
      {
        "requireParamDescription": false,
        "requireReturn": false,
        "requireReturnDescription": false,
        "preferType": {
          "bool":    "Boolean",
          "boolean": "Boolean",
          "float":   "Number",
          "int":     "Number",
          "integer": "Number",
          "number":  "Number",
          "object":  "Object",
          "string":  "String",
        }
      }
    ],
    "valid-typeof": 2,
    "wrap-iife": [
      2,
      "any"
    ],
    "yoda": [
      2,
      "never"
    ]
  }
};
