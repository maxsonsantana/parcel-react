module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 12.0 } }],
    '@babel/preset-react',
  ],
  plugins: [['@babel/transform-runtime', { regenerator: true }]],
};
