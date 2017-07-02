const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const routes = require('./controllers/G7_controllers.js');
const models = require('./models');
const path = require('path');
const compiler = webpack(webpackConfig);

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
app.use('/', routes);

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'assets', 'index.html'));
});

models.sequelize.sync();



const server = app.listen(process.env.PORT || 3000, function(){
    const host = server.address().address;
    const port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});
