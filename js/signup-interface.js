$(function(){
    $('#signup').submit(function(event){
      event.preventDefault();
      var email = $('#email').val();
      $('#signup').hide();
      $('#solution').prepend(`<p>Thank you, ${email} will be added!</p>`);
  });
});
