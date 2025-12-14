import studio from '@sanity/eslint-config-studio';
import prettier from 'eslint-plugin-prettier';

export default [
    ...studio,
    {
        ignores: ['dist', '.sanity']
    },
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: {
                window: 'readonly',
                URLSearchParams: 'readonly',
                browser: true,
                node: true,
                defineNuxtConfig: 'readonly',
                defineNuxtPlugin: 'readonly',
                process: 'readonly',
                useSanity: 'readonly'
            }
        }
    },
    {
        plugins: {
            prettier
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    semi: true,
                    singleQuote: true,
                    tabWidth: 4,
                    trailingComma: 'none',
                    bracketSameLine: false,
                    printWidth: 100,
                    htmlWhitespaceSensitivity: 'ignore',
                    endOfLine: 'lf'
                }
            ]
        }
    }
];
