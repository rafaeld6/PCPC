$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.parallax--head').css('top',-(scrolled*0.4)+'px');
  $('.parallax--content').css('top',-(scrolled*0.2)+'px');
  $('.parallax--button').css('top',-(scrolled*0.25)+'px');
  $('.parallax--possibilities').css('top',-(scrolled*0.6)+'px');
  $('.parallax--play').css('top',-(scrolled*0.75)+'px');
  $('.parallax--brand').css('top',-(scrolled*0.0000001)+'px');
  $('.parallax--nav').css('top',-(scrolled*0.9)+'px');
  $('.parallax--mission').css('top',-(scrolled*0.45)+'px');
  $('.parallax--mission-img').css('top',-(scrolled*0.3)+'px');
  $('.parallax--read').css('top',-(scrolled*0.5)+'px');
}