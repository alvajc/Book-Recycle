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

$("#jumboSearchResult").hide();
$(document).ready(function() {
  $("#submitSearch").click(function() {
    $("#jumboSearchResult").slideDown(700);
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
      if(bookSearch.length === 0) {
          var searchResultList = document.getElementById('searchResultDiv');
          var searchResultColumn = document.createElement('div');
          searchResultColumn.className = 'col-md-12 text-center';
          searchResultList.appendChild(searchResultColumn);
          var searchName = document.createElement('h4');
          searchName.textContent = "No books found that match your search";
          searchResultColumn.appendChild(searchName);
      } else if(bookSearch.length > 0) {
        for (var i = 0; i < bookSearch.length; i++) {
          var searchResultList = document.getElementById('searchResultDiv');
          var searchResultColumn = document.createElement('div');
          searchResultColumn.className = 'col-md-4 col-sm-12 text-center';
          searchResultList.appendChild(searchResultColumn);
          var searchName = document.createElement('h4');
          searchName.textContent = bookSearch[i].bookname;
          var searchAuthor = document.createElement('h4');
          searchAuthor.textContent = bookSearch[i].bookauthor;
          var searchPrice = document.createElement('h4');
          searchPrice.textContent = bookSearch[i].sellprice;
          var searchBuy = document.createElement('button');
          searchBuy.className = 'btn btn-warning';
          searchBuy.textContent = 'Buy';
          searchResultColumn.appendChild(searchName);
          searchResultColumn.appendChild(searchAuthor);
          searchResultColumn.appendChild(searchPrice);
          searchResultColumn.appendChild(searchBuy);
        }
      }
    }
  };

  var bookName = document.getElementById('bookNameSearch').value;
  xhr.open('POST', '/booksearch', true);
  xhr.send(bookName);
}, false);
