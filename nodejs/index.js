var express = require("express");
var app     = express();
var path    = require("path");

var directory = 'C:/Users/franco/Source/Repos/playground/';

app.get('/',function(req,res){
  res.sendFile(path.join(directory + 'index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/js/:file',function(req,res){
  res.sendFile(path.join(directory + 'js/' + req.params.file));
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

app.get('/templates/:file',function(req,res){
  res.sendFile(path.join(directory + 'app/templates/' + req.params.file));
});

app.get('/css/:file',function(req,res){
  res.sendFile(path.join(directory + 'css/' + req.params.file));
});

app.listen(3000);

console.log("Running at Port 3000");