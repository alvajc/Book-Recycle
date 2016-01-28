var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bookListing = require("./js/bookListing.js");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('./'));

var bookListing = app.route('/bookListing');

bookListing.post(function(req, res) {
  var book = new Book();
  book.firstname = req.body.firstname;
  book.lastname = req.body.lastname;
  book.email = req.body.email;
  book.phone = req.body.phone;
  book.bookname = req.body.bookname;
  book.bookauthor = req.body.bookauthor;
  book.sellprice = req.body.sellprice;
  book.save();
});

app.listen(1337);
console.log('listening on localhost:1337');