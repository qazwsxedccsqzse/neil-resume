$(document).ready(function(){
	var navHeight = $('#nav').outerHeight();
    $(window).scroll(function(){
	  console.log(navHeight);
      if ($(this).scrollTop() > 0) {
          $('#invisible-height').height(navHeight);
          $('#nav').addClass('nav-fixed');
      } else {
      	  $('#invisible-height').height(0);
          $('#nav').removeClass('nav-fixed');
      }
  });
});