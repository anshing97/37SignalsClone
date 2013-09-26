
$(document).ready(function(){

  var card_hover_effect = function (card_selector, headline_selector) {

    $(card_selector).mouseenter(function(){
      $('#37-signals-hl').hide();
      $(headline_selector).show();    
      $(this).children(".arrow").show();      
    }).mouseleave(function(){
      $(headline_selector).hide();
      $('#37-signals-hl').show();
      $(this).children(".arrow").hide();      
    })
  };

  card_hover_effect("#bc-card","#bc-hl");
  card_hover_effect("#cf-card","#cf-hl");
  card_hover_effect("#hr-card","#hr-hl");

});

