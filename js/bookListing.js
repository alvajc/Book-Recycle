var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BookRecycle', function() {
  console.log('connected to mongo Book Recycle collection');
});

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

var bookListing = mongoose.model('bookListing', bookSchema);
module.exports = bookListing;