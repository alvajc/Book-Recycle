var express = require('express');
var app = express();

app.use(express.static('./'));

app.listen(1337);
console.log('listening on localhost:1337');