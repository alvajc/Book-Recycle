var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bookListing = require("./js/bookListing.js");

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
      res.json({ message: 'Book listed', data: book });
    }
  });
});

app.post('/booksearch', function(req, res) {
  bookListing.find({ bookname: req.body.bookNameSearch },
  function(err, docs) {
    if (err) {
      res.send(err);
    } else {
      res.json(docs);
    }
  });
});

app.use(express.static('./'));
app.listen(1337);
console.log('listening on localhost:1337');