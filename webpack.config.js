const path = require('path'); //in order to resolve paths properly across different OS
const HtmlWebpackPlugin = require('html-webpack-plugin'); // plugin for creation of html files into bundles
const webpack = require('webpack')

module.exports = {
    // entry: {
    //     main: path.resolve(__dirname, './src/index.tsx') // this will be the name of bundled file, main.js in dist folder
    // },
    entry: path.resolve(__dirname, './src/index.tsx'), // resolves path to index.tsx
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // configure ts file to be processed using below loaders
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.(scss|css|sass)$/, // configure sass files to be processed using below loaders
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // file extensions that webpack will resolve.
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js' //[name] here represents the name we pass in entry object
    },
    plugins: [new HtmlWebpackPlugin({ // plugin to generate html file for template index.html
        template: path.resolve(__dirname, "public", "index.html")
    }),
    new webpack.HotModuleReplacementPlugin() // plugin for replacement of modules without full page reload
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // driectory to serve static files
        },
        port: 3001, // start app on this port
        hot: true // enable hot module replacement 
    }
};