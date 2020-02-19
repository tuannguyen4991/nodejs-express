var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response) {
    response.send('TEST');
})

app.get('/users', function(request, response) {
    response.send('Get all users');
})

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
})