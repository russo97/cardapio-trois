
module.exports = {
  devServer: {
    proxy: 'https://sheets.googleapis.com/v4/spreadsheets'
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/main.scss";
        `
      }
    }
  }
}
