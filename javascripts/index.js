$(document).ready(function(){
	$('.collection-wrapper').slick({
	    dots: false,
	    slidesToShow: 5,
 		slidesToScroll: 1,
 		autoplay: true,
  		autoplaySpeed: 2000,
  		infinite: true,
  		arrows: true
	});

	$(".collection-tab").hover(function(){
		$(this).addClass('hover');
	}, function(){
		$(this).removeClass('hover');
	})

	setTimeout(function(){
		$(".main-slide__ef").addClass('effect');
	}, 300);
	setTimeout(function(){
		$(".main-text__first p").addClass('title');
		$(".main-text__second p").addClass('title');
	}, 400);
	setTimeout(function(){
		$(".main-text__btn p").addClass('title');
	}, 500);
		// initialize paroller.js and set attributes for selected elements
	setTimeout(function(){
		$(".main-slide__ef.first").paroller({
			factor: 0.2,
			type: 'foreground',
			direction: 'vertical',
			transition: 'transform 0.7s ease' // CSS transition
    	});
    	$(".main-slide__ef.third").paroller({
			factor: -0.1,
			type: 'foreground',
			direction: 'vertical',
			transition: 'transform 0.7s ease' // CSS transition
    	});
	}, 1000);
/*
	function partTwoFeature(){
		var featureTop = $(".feature-title").offset().top;
		var scrolled = $(window).scrollTop();
		var windowWidth = $(window).width();
		if(windowWidth > 768){
			if (scrolled > featureTop * 0.7){
				$(".content-img__main").find('img').addClass('appear');				
			}
		} else if (windowWidth <= 768){
			if (scrolled > featureTop * 0.9){
				$(".content-img__main").find('img').addClass('appear');
			}
		}
	}
*/
	$(window).scroll(function() {
		//partTwoFeature();
	});
});