const webpack              = require('webpack');
const path                 = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin    = require('browser-sync-webpack-plugin');
const autoprefixer         = require('autoprefixer');
const SpriteLoaderPlugin   = require('svg-sprite-loader/plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');

const config = {
  domain: 'react-boilerplate.local', // domain on your local server for livereload on localhost:3000
  directory: '', // subdirectory with slash at the end
  title: 'React Boilerplate', //page app title
};

module.exports = {
  entry: [
    './src/index.js',
    './src/css/styles.css',
  ],
  output: {
    publicPath: `/${config.directory}`,
    path: path.resolve(__dirname, `dist/${config.directory}`),
    filename: 'js/scripts.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }, 
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: () => [
                autoprefixer({
                  browsers:['ie >= 8', 'last 4 version']
                }), 
                require("cssnano")({
                  preset: [
                    "default",
                    {
                      discardComments: {
                        removeAll: true
                      }
                    }
                  ]
                })
              ]
            }
          }
        ]
      }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'images/icons.svg', // this is the destination of your sprite sheet
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      open: false,
      proxy: config.domain,
    }), 
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    new SpriteLoaderPlugin({
      plainSprite: true
    }), 
    new HtmlWebpackPlugin({
      title: config.title,
      template: './src/index.html'
    }), 
    new CopyWebpackPlugin([
      {
        from: './src/.htaccess',
        to: `./`
      }
    ])
  ],
  watchOptions: {
    ignored: ['node_modules', 'info']
  }
};