const eslint = require('neat-configs/native/eslint');

module.exports = {
  ...eslint,
  parserOptions: {
    ...eslint.parserOptions,
    project: ['./tsconfig.json'],
  },
  rules: {
    ...eslint.rules,
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
