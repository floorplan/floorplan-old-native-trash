/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
console.log('****************');
console.log('****************');
console.log('****************');
console.log(path.resolve(__dirname, '../../'));
console.log('****************');
console.log('****************');
console.log('****************');
module.exports = {
  projectRoot: path.resolve(__dirname, '../../'),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
