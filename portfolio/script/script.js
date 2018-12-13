$(document).ready(function() {
	$('.skills').find('.skillbar-bar').each(function(){
		$(this).viewportChecker({
			callbackFunction: function(elem){
				elem.animate({width: elem.attr('data-percent')}, 800);
			}
		});
	});
});