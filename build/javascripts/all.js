$.each($('.lesson a'), function( index, link ) {
  var title = $.trim($(link).find('.lesson-title h3').text());
  var url = 'http://www.theodinproject.com' + $(link).attr('href');
  var result = "%li #{link_to('" + title + "', '" + url + "')}";
  console.log(result);
});
$('#menu .nav-open').on('click', function(){
  $('#menu .nav').toggleClass('open');
})
;
