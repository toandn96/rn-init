module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@appConstants': './src/appConstants',
          '@appStyles': './src/appStyles',
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@services': './src/services',
          '@stores': './src/stores',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
