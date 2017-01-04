$(document).ready(function() {
  var $newCircle;
  for (var i = 0; i < 80; i++) {
    $newCircle = $('<div class="circle">');
    $('.line').append($newCircle);
  };

  $('.circle').hover(function() {
    var randomColor = Math.random();
    if (randomColor < 0.33) {
      randomColor = '#FFD452';
    } else if (randomColor <= 0.66) {
      randomColor = '#F42A41';
    } else {
      randomColor = '#60AA27';
    };
    $(this).css('background-color', randomColor);
  });

});
