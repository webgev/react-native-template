module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },

  plugins: ['react', '@typescript-eslint'],

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },

  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/*': ['off'],
      },
    },
    {
      files: [
        '*.spec.ts',
        '*.spec.tsx',
        '*.spec.js',
        '*.spec.jsx',
        '*.test.ts',
        '*.test.tsx',
        '*.test.js',
        '*.test.jsx',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],

  rules: {
    'react/prop-types': ['off'],
    'react/no-set-state': ['off'],
    'react/no-deprecated': ['warn'],
    'react/jsx-key': ['error'],
    'react/jsx-fragments': ['error'],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-no-useless-fragment': ['off'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/no-string-refs': ['error'],
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/jsx-props-no-spreading': ['off'],
    'react/display-name': ['off'],
    'react/no-children-prop': ['off'],
    'react/jsx-sort-props': [
      'error',
      { shorthandFirst: true, callbacksLast: true },
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-unused-modules': ['off'],
    'no-console': ['warn'],
    'arrow-parens': ['warn', 'as-needed'],
    'import/no-cycle': ['warn'],
    'import/no-useless-path-segments': ['error'],
    'import/extensions': ['off'],
    'import/export': ['off'],
    'import/prefer-default-export': ['off'],
    'import/no-unresolved': ['off'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    // ts
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/consistent-type-definitions': ['off'],
    '@typescript-eslint/member-ordering': ['off'],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/no-for-in-array': ['error'],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-misused-promises': ['error'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    '@typescript-eslint/no-require-imports': ['off'],
    '@typescript-eslint/no-throw-literal': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
    '@typescript-eslint/prefer-as-const': ['error'],
    '@typescript-eslint/prefer-for-of': ['error'],
    '@typescript-eslint/prefer-includes': ['error'],
    '@typescript-eslint/no-extraneous-class': ['off'],
    '@typescript-eslint/no-this-alias': ['error'],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/prefer-regexp-exec': ['warn'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],
    '@typescript-eslint/restrict-plus-operands': ['warn'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    'no-use-before-define': ['off'],
    'no-unused-vars': ['off'],
    'no-shadow': ['off'],
    semi: ['error', 'always'],

    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-void': ['off'],
    'lines-between-class-members': ['off'],
    'consistent-return': ['off'],
    'no-useless-return': ['off'],
    'react/jsx-wrap-multilines': ['off'],
    'react/jsx-curly-newline': ['off'],
    'no-plusplus': ['off'],
    'no-underscore-dangle': ['off'],
    'max-len': ['off'],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'no-undef': ['off'],
    'react/no-unused-prop-types': ['off'],
    'react/no-array-index-key': ['off'],
    'class-methods-use-this': ['off'],
    'no-nested-ternary': ['off'],
    indent: ['off'],
    'react/require-default-props': ['off'],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          { pattern: '~/**', group: 'internal' },
          { pattern: './**', group: 'sibling' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@react-navigation/native',
            importNames: ['useRoute', 'useNavigation', 'useTheme'],
            message:
              'Please import useNavigation / useRoute / useTheme from ~/navigation instead.',
          },
          {
            name: '@webgev/react-native-size',
            message: 'Please import from ~/lib/size instead.',
          },

          {
            name: 'native-base',
            message:
              'Please import from ~/components/UI instead for components and  ~/lib/theme for useTheme',
          },
        ],
      },
    ],
  },
};
