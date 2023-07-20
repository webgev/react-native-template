module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:import/typescript'],

  plugins: ['react', 'import'],

  rules: {
    'no-console': ['warn'],
    'import/no-cycle': ['warn'],
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
        ],
      },
    ],
  },
};
