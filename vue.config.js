module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://arta-backend.herokuapp.com',
        changeOrigin: true,
        pathRewrite: {'^/api': '/'}, 
        logLevel: 'debug'
      }
    }
  }
};