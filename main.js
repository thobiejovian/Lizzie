$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop();

  $('.parallax--bg').css('background-position', 'center top'+(wScroll * 0.4)+'px')
}
