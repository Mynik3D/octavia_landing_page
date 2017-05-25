$(window).load(function(){
$(".slider").slick({
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 5000,
  initialSlide: 1,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
 appendArrows: '.arrow',
 prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
 nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>'
});

});