$(function(){

  var $signals = $('#signals');

  $('.card').hover(function(){

    var product = $(this).data('product');

    $signals.hide(); 
    $('.description[data-product="' + product + '"]').show(); 
    $(this).children('.arrow').show();

  },function(){

    var product = $(this).data('product');
    
    $signals.show(); 
    $('.description[data-product="' + product + '"]').hide(); 
    $(this).children('.arrow').hide();

  }); 

});

