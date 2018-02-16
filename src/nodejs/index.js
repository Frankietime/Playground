'use-strict';

const express = require("express");
const app     = express();
const path    = require("path");

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

var directory = 'C:/Users/franco/Source/Repos/playground/src/';

app.get('/',function(req,res){
  res.sendFile(path.join(directory + 'index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/js/:file',function(req,res){
  res.sendFile(path.join(directory + 'js/' + req.params.file));
});

app.get('/js/shim/:file',function(req,res){
  res.sendFile(path.join(directory + 'js/shim/' + req.params.file));
});

app.get('/app/:file',function(req,res){
  res.sendFile(path.join(directory + 'app/' + req.params.file));
});;

app.get('/app/controllers/:file',function(req,res){
  res.sendFile(path.join(directory + 'app/controllers/' + req.params.file));
});

app.get('/app/services/:file',function(req,res){
  res.sendFile(path.join(directory + 'app/services/' + req.params.file));
});

app.get('/app/directives/:file',function(req,res){
  res.sendFile(path.join(directory + 'app/directives/' + req.params.file));
});

app.get('/app/filters/:file',function(req,res){
  res.sendFile(path.join(directory + 'app/filters/' + req.params.file));
});

app.get('/templates/:file',function(req,res){
  res.sendFile(path.join(directory + 'app/templates/' + req.params.file));
});

app.get('/css/:file',function(req,res){
  res.sendFile(path.join(directory + 'css/' + req.params.file));
});

app.get('/css/shim/:file',function(req,res){
  res.sendFile(path.join(directory + 'css/shim/' + req.params.file));
});

app.get('/fonts/:file',function(req,res){
  res.sendFile(path.join(directory + 'fonts/' + req.params.file));
});

app.listen(3000);

console.log("Running at Port 3000");