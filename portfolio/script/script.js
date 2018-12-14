$(document).ready(function() {
	$('.skills').find('.skillbar-bar').each(function(){
		$(this).viewportChecker({
			callbackFunction: function(elem){
				elem.animate({width: elem.attr('data-percent')}, 800);
			}
		});
	});
});

var $btnTop = $('.btn-top');

$(window).on('scroll', function(){
	if($(window).scrollTop() >= 350){
		$btnTop.fadeIn();
	} else {
		$btnTop.fadeOut();
	}
});

$btnTop.on('click', function() {
	$("html, body").animate({scrollTop: 0}, 750);
});

if(window.matchMedia("screen and (max-width: 1024px)").matches){
	$btnTop.html('&#9650;');
	$btnTop.css({
		height: '70px',
		width: '70px',
		fontSize: '30px'
	});
}