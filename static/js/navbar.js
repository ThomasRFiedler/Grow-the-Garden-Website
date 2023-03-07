var first_scroll;
var last_scroll;
$(window).scroll(function() {
  first_scroll = $(this).scrollTop();
  if (last_scroll===undefined) { 
    last_scroll = $(this).scrollTop();
  } else {
    var scroll_value = first_scroll-last_scroll;
    if (scroll_value<0) 
    {
      $('.top-nav').fadeIn();
    } else {
      $('.top-nav').fadeOut();
      if ($('.a-wrap').is(':visible')) {
        $('#collapse-text').html('+');
        $('.a-wrap').fadeOut();
      }
    }
  }
  last_scroll = $(this).scrollTop();
});
$('#collapse-button').click(function() {
  if ($('.a-wrap').is(':visible')) {
    $('#collapse-text').html('+');
    $('.a-wrap').fadeOut();
  } else {
    $('#collapse-text').html('-');
    $('.a-wrap').fadeIn();
  }
});
