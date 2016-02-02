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

$("#mainTitle").hide().slideDown(3200);

$("#mainFeature").hide().fadeIn(4500);
