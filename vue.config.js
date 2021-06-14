module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: './',
  devServer: {
    proxy: {
      "/api": {
        target: "http://8.136.210.85:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    disableHostCheck: true
  }
};
