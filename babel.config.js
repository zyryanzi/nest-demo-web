module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/proposal-class-properties", { "loose": true }],
    /* ["import", {
      "libraryName": "ant-design-vue",
      "libraryDirectory": "es",
      "style": "css"
    }] */
  ]
}
