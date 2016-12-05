module.exports = {
  entry: './entry.js',
  output: {
    filename: './bundle.js'
  },
  devServer: {
    proxy: {
      '/test/*': {
        proxyTimeout: 1000 * 60 * 5, // 5 minutes
        secure: false,
        target: 'http://127.0.0.1:8081/',
      }
    }
  }
}

