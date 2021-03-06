var express = require('express');
var app = express();
var jade = require('jade');
var router = express.Router();
var bodyParser = require('body-parser');
var textParser = bodyParser.text();
var mongoose = require('mongoose');
var bookListing = require("./js/bookListing.js");

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
  extended: true
}));



app.post('/booklist', function(req, res) {
  var book = new bookListing();
  book.firstname = req.body.firstname;
  book.lastname = req.body.lastname;
  book.email = req.body.email;
  book.phone = req.body.phone;
  book.bookname = req.body.bookname;
  book.bookauthor = req.body.bookauthor;
  book.sellprice = req.body.sellprice;
  book.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send("You're book has been listed. We will notify you when it sells.");
    }
  });
});

app.post('/booksearch', function(req, res) {
  bookListing.find({ $text: { $search: req.body }},
  function(err, bookListings) {
    res.json(bookListings);
  });
});

app.use('/booksearch', textParser, bookListing);
app.use(express.static('./'));
var port = process.env.PORT || 3000;
app.listen(port);
