module.exports = {
  devServer: {
    disableHostCheck: true,
  },
     chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Bobb's Site";
                return args;
            })
    }
}