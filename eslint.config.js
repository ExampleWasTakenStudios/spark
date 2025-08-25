import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import recommendedConfig from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  recommendedConfig,
  {
    name: 'Main Config',
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],

      'no-unused-vars': 'off', // Ensure eslint doesn't care about unused variables.
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],

      'no-await-in-loop': 'error', // possible performance impact - see: https://eslint.org/docs/latest/rules/no-await-in-loop
      'no-constructor-return': 'error', // Returning values from constructors is bad practice and can be confusing as constructors always return the object they instantiated (this).
      'no-self-compare': 'error', // Saves time during code review. (https://eslint.org/docs/latest/rules/no-self-compare)
      'no-unreachable-loop': 'error', // Saves time during code review by preventing unnecessary one-time-loops. (https://eslint.org/docs/latest/rules/no-unreachable-loop)
      'no-console': 'warn', // Using winston should be preferred over direct console.log statements.
    },
  },
  {
    files: ['**/*.mjs', '**/*.cjs', '**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    // DO NOT ADD ANY PROPERTIES TO THIS OBJECT
    ignores: ['node_modules', 'build', 'assets'],
  },
);
