$(document).ready(function() {
	$('#nav').affix();
});

/*NAVBAR TRANSITION*/
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#carousel-villamileti');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top*(-2)) {
          $(".menu_wrapper").css('background-color', 'white');
		  $(".menu_wrapper").css('height', '63px');
		  $(".menu li a").css('color', 'black');
		  $(".menu-hm").css('background-image', 'url(pictures/villaMiletti%20logo.png)');
		  $(".menu-hm").css('background-size', '75px');
		  $(".menu-hm").css('width', '75px');
		  $(".menu-hm").css('height', '75px');
		  $(".menu_wrapper").css('box-shadow', 'none');
       } else {
          $('.menu_wrapper').css('background-color', 'transparent');
		  $(".menu_wrapper").css('height', '90px');
		  $(".menu li a").css('color', 'white');
		  $(".menu-hm").css('background-image', 'url(pictures/villaMiletti%20logo%20white.png)');
		  $(".menu-hm").css('background-size', '105px');
		  $(".menu-hm").css('width', '95px');
		  $(".menu-hm").css('height', '95px');
		  $(".menu_wrapper").css('box-shadow', 'inset 0 0 500px rgba(0,0,0,0.8)');
       }
   });
    }
});

/*ABOUT - READ MORE*/
$('.SeeMore2').click(function(){
		var $this = $(this);
		$this.toggleClass('SeeMore2');
		if($this.hasClass('SeeMore2')){
			$this.text('See more');			
		} else {
			$this.text('See less');
		}
	});

/*TO THE TOP*/
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 800,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		 	}, scroll_top_duration
		);
	});

});

/*SMOOTH SCROLL*/
$(function() {
    $('a.pagescroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
