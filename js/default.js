// Form Validation------------
$.validate({
    modules : 'html5'
  });

$.validate({
  modules: 'location',
  onModulesLoaded: function() {
    $('input[name="user_home_state"]').suggestState();
  }
});

$.validate({
  modules : 'security',
  onModulesLoaded : function() {
    $('#credit-card').on('change', function() {
      var card = $(this).val();
      $('input[name="creditcard_num"]').attr('data-validation-allowing', card);
    });
  }
});

// Main Jumbotron Animation ------------
$("#mainTitle").hide().fadeIn(3200);
$("#mainFeature").hide().fadeIn(4500);
$("#arrow").hide().fadeIn(5500);
$("#listBookDiv").hide();
$(document).ready(function() {
  $("#listBookButton").click(function() {
    $("#listBookDiv").slideDown(400);
  });
});

$("#searchResultDiv").hide();
$(document).ready(function() {
  $("#submitSearch").click(function() {
    $("#searchResultDiv").slideDown(700);
  });
});

// XMLHttpRequest to search books on MongoDB -----
var search = document.getElementById('submitSearch');
search.addEventListener('click', function(book) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      var bookObject = xhr.responseText;
      var bookSearch = JSON.parse(bookObject);
      bookNameResult.textContent = bookSearch[0].bookname;
      bookAuthorResult.textContent = bookSearch[0].bookauthor;
      bookPriceResult.textContent = bookSearch[0].sellprice;
      var search = document.getElementById('searchResultDiv');
      search.setAttribute('class', 'show');
    }
  };
  var bookName = document.getElementById('bookNameSearch').value;
  xhr.open('POST', '/booksearch', true);
  xhr.send(bookName);
  console.log(bookName);
}, false);
