module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
          '@comp': './src/components',
          '@icon': './src/assets/icon',
          '@img': './src/assets/image',
        },
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
  ],
}
