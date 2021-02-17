const path = require('path');
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
    },
  css: {
    loaderOptions: {
  
      sass: {

        sassOptions: {
          use: ["sass-loader", "node-sass"],
          includePaths: [
            './node_modules'
          ]
        },
        additionalData: `@import "@/_variables.scss";`,
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      // load which style file you want to import globally
      patterns: [path.resolve(__dirname, './src/_variables.scss')],
    },
  }
};
