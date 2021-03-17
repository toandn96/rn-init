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
          components: 'src/components',
          screens: 'src/screens',
          stores: 'src/stores',
          navigations: 'src/navigations',
          appConstants: 'src/appConstants',
          appStyles: 'src/appStyles',
          assets: 'src/assets',
          services: 'src/services',
          utils: 'src/utils',
        },
      },
    ],
  ],
};
