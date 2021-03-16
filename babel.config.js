module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': 'src/components',
          '@screens': 'src/screens',
          '@stores': 'src/stores',
          '@utils': 'src/utils',
          '@services': 'src/services',
          '@navigations': 'src/navigations',
          '@assets': 'src/assets',
          '@appStyles': 'src/appStyles',
          '@appConstants': 'src/appConstants',
        },
      },
    ],
  ],
};
