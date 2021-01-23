module.exports = {
  devServer: {
    disableHostCheck: true,
       inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: __dirname,
    overlay: true,
    historyApiFallback: true
  },
}