var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const VENDOR_LIBS = ['bootstrap', 'swiper'];
const BUNDLE_LIBS = ['./src/index.js', './src/work.js'];



module.exports = {
    
    entry: {
        bundle: BUNDLE_LIBS,
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: { limit: 40000}
                    },
                    {
                        loader : 'image-webpack-loader',
                        options: { bypassOnDebug: true }
                    }
                ]
            },
            {
                
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: 'fonts/[name].[ext]',
                    outputPath: 'fonts',
                    publicPath: 'fonts'
                  }
                }]
                
            },
            {
              // HTML LOADER
              test: /\.html$/,
              loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          Tether: 'tether'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
           filename:'work.html',
           template: 'src/work.html'
        }),
        new ExtractTextPlugin('styles.css')
    ]
    
};


