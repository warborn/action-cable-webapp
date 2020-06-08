module.exports = ({ file, options, env }) => ({
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        customProperties: {
          warnings: false,
          preserve: true,
        },
      },
    },
    "postcss-url": {},
  },
});
