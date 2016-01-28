var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require("./js/book.js");

var bookTwo = new Book({
  firstname: "John",
  lastname: "Smith",
  email: "email@gmail.com",
  phone: 1234567890,
  bookname: "Harry Potter",
  bookauthor: "J.K. Rowling",
  sellprice: 9.99
});

bookTwo.save(function() {
  console.log("bookTwo saved");
});

app.use(express.static('./'));

app.listen(1337);
console.log('listening on localhost:1337');