$(document).ready(function(){
	$(".nav-menu").click(function(e){
		e.preventDefault();
		if ($(".nav-menu").hasClass('open')) {
			$(".nav-menu").removeClass('open');
			$(".nav-bottom").animate({
				height: "0"
			}, 500);
			setTimeout(function(){
				$(".nav-bottom").removeClass('open');
			}, 500);
			$(".gnb-tab").find(".gnb-tab__list").removeClass('active');
			$(".gnb-tab").find(".title-indicator").removeClass('active');
			$(".gnb-tab").find(".title-line").removeClass('active');
			$("html").css('overflow-y', 'auto');
		} else {
			$(".nav-menu").addClass('open');
			$(".nav-bottom").animate({
				height: "90vh"
			}, 500);
			$(".nav-bottom").addClass('open');
			$("html").css('overflow-y', 'hidden');
		}
	});
	$(".title-text").hover(function(){
		var index = $(this).closest(".gnb-tab").index();
		$(".gnb-tab").eq(index).find(".title-indicator").addClass('hover');
	}, function(){
		var index = $(this).closest(".gnb-tab").index();
		$(".gnb-tab").eq(index).find(".title-indicator").removeClass('hover');
	});


	$(".title-text").click(function(e){
		e.preventDefault();
		var thisIndex = $(this).closest(".gnb-tab").index();
		if($(".gnb-tab").eq(thisIndex).find(".gnb-tab__list").hasClass('active')) {
			$(".gnb-tab").eq(thisIndex).find(".gnb-tab__list").animate({
				height: "0"
			}, 500)
			$(".gnb-tab").eq(thisIndex).find(".gnb-tab__list").removeClass('active');
			$(".gnb-tab").eq(thisIndex).find(".title-indicator").removeClass('active');
			$(".gnb-tab").eq(thisIndex).find(".title-line").removeClass('active');
		} else {
			$(".gnb-tab").eq(thisIndex).find(".gnb-tab__list").animate({
				height: "100%"
			}, 500);
			$(".gnb-tab").eq(thisIndex).find(".gnb-tab__list").addClass('active');
			$(".gnb-tab").eq(thisIndex).find(".title-indicator").addClass('active');
			$(".gnb-tab").eq(thisIndex).find(".title-line").addClass('active');
		}
	});
});