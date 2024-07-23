module.exports = {
  presets: ['@babel/preset-react', 'module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        alias: {
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@screens': './src/components/screens',
          '@organisms': './src/components/organisms',
          '@templates': './src/components/templates',
          '@navigation': './src/navigation',
          '@context': './src/context',
          '@constants': './src/constants',
          '@containers': './src/containers',
          '@utils': './src/utils',
          '@type': './src/type',
          '@api': './src/api',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
