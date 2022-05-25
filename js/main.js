jQuery(document).ready(function($) {

	$('.harvest_b3 .b3_slider').slick({
	    dots: true,
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    cssEase:'ease-in-out',
	    arrows: false,
	    autoplay: true,
	    autoplaySpeed: 6000
	  });	

	$(".scroll_parralax").each(function() {
	    var t = $(this),
	        e = $(this).attr("data-animation");
	    $(window).scroll(function() {
	        var o = t.offset().top,
	            i = t.height() + o;
	        o -= $(window).height();
	        var a = $(this).scrollTop();
	        a > o && a < i && (t.hasClass("animated") || t.addClass("animated " + e))
	    })
	});
	var navMenuPos = $('.nav_menu').offset().top + $('.nav_menu').height();	
  
	$('.recommendet_products_carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      },
    ]
  });	
	$(window).scroll(function () {
		var pageScrollTop = $(this).scrollTop();
		if (pageScrollTop >= navMenuPos - 90 ) {
			$('body').addClass('fixed_nav_menu');
		}
		else{
			$('body').removeClass('fixed_nav_menu');
		}
		
	});
	$('.go_to').click(function(e) {
	    var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top;
	    $('html, body').stop().animate({
	      scrollTop: offsetTop - 50 
	    }, 800);    
	    e.preventDefault();
	    if($(".mob_menu_trigger").hasClass('active')){
	        $(".mob_menu_trigger").removeClass('active'); 
	         $('.scroll_links').removeClass('menu_opened');
	    }
	});
	$('.video_thumb .play_video').click(function () {
		var href = $(this).attr('data-video-id');
		//$(this).closest('.video_thumb').hide();
		$('.video_player').show();
		$('.video_player iframe').attr('src', href);
		return false;
	})
});


window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.lax_wrapp img', {
      scrollY: {
        translateY:[
            ["elInY", "elOutY"],
            [-70, 70]
          ],
      }
    })
  }
