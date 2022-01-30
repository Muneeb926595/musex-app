module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          app: './src',
          components: './src/components',
          styles: './src/styles',
          helpers: './src/helpers',
          screens: './src/screens',
          models: './src/models',
          hooks: './src/hooks',
          assets: './src/assets',
          utils: './src/utils',
          store: './src/store',
        },
      },
    ],
  ],
};
