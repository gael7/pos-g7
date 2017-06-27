var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();
var path = require('path');

var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/assets'));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'assets', 'index.html'));
});

var server = app.listen(process.env.PORT || 3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});
