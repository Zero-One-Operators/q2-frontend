// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env', // For transforming modern JavaScript
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ], // For transforming React JSX
    '@babel/preset-typescript', // For transforming TypeScript (if you're using it)
  ],
};
