import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier";

export default withNuxt({
  rules: {
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsForRegex: ["^mut"],
      },
    ],
    "no-duplicate-imports": "error",
    "id-denylist": ["error", "err", "e", "evt", "cb"],
    "no-restricted-syntax": [
      "error",
      {
        selector:
          ":not(BinaryExpression:matches([operator='!=='], [operator='==='])):not(CallExpression[callee.name='useRef']) > Literal[value=null]",
        message: "Don't use null. Use undefined instead",
      },
      {
        selector: "CallExpression[callee.name='setTimeout']",
        message: "Use window.setTimeout instead",
      },
      {
        selector: "CallExpression[callee.name='setInterval']",
        message: "Use window.setInterval instead",
      },
      {
        selector: "ImportNamespaceSpecifier",
        message: "Don't use import * as something",
      },
    ],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 4,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 4,
        },
        ImportDeclaration: "never",
        ExportDeclaration: "never",
      },
    ],
    "no-implicit-coercion": "error",
    eqeqeq: "error",
    "no-else-return": "error",
    "no-useless-return": "error",
    "prefer-template": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "func-name-matching": "error",
    "no-use-before-define": "error",
    "no-unreachable": "error",
    "no-undef": "error",
    "no-unused-vars": "warn",
    "no-empty-function": "error",
    "no-trailing-spaces": "warn",
    "no-console": [
      "error",
      {
        allow: ["log", "warn", "error"],
      },
    ],
    "vue/no-reserved-component-names": "off",
    "vue/html-self-closing": "off",
    "vue/require-prop-types": "warn",
    "vue/require-default-prop": "warn",
    "vue/prop-name-casing": ["warn", "camelCase"],
    "vue/html-quotes": ["warn", "double"],
    "vue/multi-word-component-names": "off",
    "vue/html-indent": ["warn", 4], // TODO: revisit, conflict with prettier
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: true,
        tabWidth: 4,
        trailingComma: "none",
        bracketSameLine: false,
        printWidth: 100,
        htmlWhitespaceSensitivity: "ignore",
        endOfLine: "lf",
      },
    ],
  },
  ignores: ["*.mjs", ".output/**", ".nuxt/**"],
  languageOptions: {
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    globals: {
      window: "readonly",
      URLSearchParams: "readonly",
      browser: true,
      node: true,
      defineNuxtConfig: "readonly",
      defineNuxtPlugin: "readonly",
      process: "readonly",
      useSanity: "readonly",
      useSanityQuery: "readonly",
      useRoute: 'readonly',
      useAsyncData: 'readonly',
      useMeta: 'readonly',
      eventBus: 'readonly',
      useNuxtApp: 'readonly',
      useHead: 'readonly',
    },
  },
  plugins: {
    prettier,
  },
});
