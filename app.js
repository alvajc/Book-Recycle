var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books', function() {
  console.log('connected to mongo books collection');
})

var Schema = mongoose.Schema;

var bookSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: Number,
  bookname: String,
  bookauthor: String,
  sellprice: Number
});

var Book = mongoose.model('Book', bookSchema);

var bookOne = new Book({
  firstname: "Juan",
  lastname: "Alvarado",
  email: "alva.juan79@gmail.com",
  phone: 5622909405,
  bookname: "Harry Potter Deathly Hallows",
  bookauthor: "J.K. Rowling",
  sellprice: 9.99
})

bookOne.save(function() {
  console.log('bookOne saved')
});














app.use(express.static('./'));

app.listen(1337);
console.log('listening on localhost:1337');