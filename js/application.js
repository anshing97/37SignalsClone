
$(document).ready(function(){

  var card_hover_effect = function (card_selector, show_selector) {
    $(card_selector).mouseenter(function(){
      $('#signals').hide();
      $(show_selector).show();    
    }).mouseleave(function(){
      $(show_selector).hide();
      $('#signals').show();
    })
  };

  card_hover_effect("#basecamp","#bc");
  card_hover_effect("#campfire","#cf");
  card_hover_effect("#highrise","#hr");

});

