
var express = require('express'); // requires the express framework
var app = express();
var fs = require('fs'); //requires file system object

// Endpoint that  Get a list of users
app.get('/nspdata', function(req, res){
    fs.readFile(__dirname + "/" + "nspdata.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

// Creating a server that listens at 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})