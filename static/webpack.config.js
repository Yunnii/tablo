var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pluginExtractCSS = new ExtractTextPlugin('main.css', {
    allChunks: true
});

var config =  {
    name: 'ru',
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    entry: ['./views/main.jsx'],
    resolve: {
        modulesDirectories: [
            '',
            'blocks',
            'node_modules'
        ],
        extensions: ['', '.js', '.jsx'],
        alias: {
        }
    },
    output: {
        path: './deploy/',
        filename: '[name].bundle.ru.js'
    },
    module: {
        preLoaders: [
            {
                test: /\/blocks\/.*\.jsx$/,
                loader: 'baggage?[dir].css&&[dir].ie.css&script.js'
            }
        ],
        noParse: [],
        loaders: [
            {test: /\.css$/, loader: pluginExtractCSS.extract('style-loader', 'css-loader')},
            {test: /\.js$/, loader: 'jsx-loader?harmony'},
            {test: /\.jpg$/, loader: "file-loader?name=[path][name].[ext]"},
            {test: /\.png$/, loader: "file-loader?name=[path][name].[ext]"},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader'] }
        ]
    },
    plugins: [
        pluginExtractCSS
    ]
};

module.exports = config;
