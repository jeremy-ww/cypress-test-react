module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: process.env.NODE_ENV === "test" ? "cjs" : false,
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
    "@babel/preset-typescript",
  ],

  env: {
    test: {
      plugins: ["istanbul"],
    },
  },
};
