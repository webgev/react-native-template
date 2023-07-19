const path = require('path');
const alias = { '~': path.resolve(__dirname, 'src') };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', { alias }],
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
  ],
};
