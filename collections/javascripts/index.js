$(document).ready(function(){
	$(".filter-tab").click(function(e){
		e.preventDefault();
		var getIndex = $(this).closest(".filter").index();
		if ($(".filter").eq(getIndex).hasClass('open')){
			$(".filter").eq(getIndex).find(".filter-wrapper").css('display', 'none');
			$(".filter").eq(getIndex).removeClass('open');
		} else {
			$(".filter").eq(getIndex).addClass('open');
			$(".filter").eq(getIndex).find(".filter-wrapper").css('display', 'inline-block');
			$(".filter").eq(getIndex).find(".filter-wrapper").css('height', '100%');
		}
	});
	$(".filter-wrapper label").click(function(e){
		e.preventDefault();
		if ($(".filter-wrapper label span").hasClass('checked')){
			$(this).children('span').css('background-color', '#9a9a9a');
			$(this).children('span').removeClass('checked');
		} else {
			$(this).children('span').css('background-color', '#aca586');
			$(this).children('span').addClass('checked');
		}
	});

	function watchvideo(){
		var videoTop = $(".watch-video").offset().top;
		var scrolled = $(window).scrollTop();
		var windowWidth = $(window).width();
		if(windowWidth > 768){
			if (scrolled > videoTop * 0.8){
				$(".watch-video__watch").find('img').addClass('appear');				
			}
		} else if (windowWidth <= 768){
			if (scrolled > videoTop * 0.9){
				$(".watch-video__watch").find('img').addClass('appear');
			}
		}
	}

	$(window).scroll(function() {
		watchvideo();
	});
});