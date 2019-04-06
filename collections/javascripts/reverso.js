$(document).ready(function(){
	$(".navigation-dot").click(function(e){
		e.preventDefault();
		var getIndex = $(this).index();
		$(".graphic-watch__img").eq(getIndex).siblings().removeClass('current');
		$(".graphic-watch__img").eq(getIndex).addClass('current');
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	$(".arrow-next").click(function(e){
		e.preventDefault();
		var currentImg = $(".graphic-watch__img").filter(".current");
		var currentImgIndex = currentImg.index();
		var nextImgIndex;
		nextImgIndex = currentImg.next().index();
		currentImgIndex = nextImgIndex >= 0 ? nextImgIndex : $(".graphic-watch__img").first().index();
		$(".graphic-watch__img").eq(currentImgIndex).addClass('current');
		$(".graphic-watch__img").eq(currentImgIndex).siblings().removeClass('current');
		$(".navigation-dot").eq(currentImgIndex).addClass('active');
		$(".navigation-dot").eq(currentImgIndex).siblings().removeClass('active');
	});
	$(".arrow-prev").click(function(e){
		e.preventDefault();
		var currentImg = $(".graphic-watch__img").filter(".current");
		var currentImgIndex = currentImg.index();
		var nextImgIndex;
		nextImgIndex = currentImg.prev().index();
		currentImgIndex = nextImgIndex >= 0 ? nextImgIndex : $(".graphic-watch__img").last().index();
		$(".graphic-watch__img").eq(currentImgIndex).addClass('current');
		$(".graphic-watch__img").eq(currentImgIndex).siblings().removeClass('current');
		$(".navigation-dot").eq(currentImgIndex).addClass('active');
		$(".navigation-dot").eq(currentImgIndex).siblings().removeClass('active');
	});
});