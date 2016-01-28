$.validate({
  form: '#registration-form',
  modules: 'location'
});

$.validate({
  modules : 'security',
  onModulesLoaded : function() {
    // Bind card type to card number validator
    $('#credit-card').on('change', function() {
      var card = $(this).val();
      $('input[name="creditcard_num"]').attr('data-validation-allowing', card);
    });
  }
});

