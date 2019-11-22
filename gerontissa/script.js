let productionContainer = document.getElementById('production_container');
let productionArrowLeft = document.getElementById('production_arrow_left');
let productionArrowRight = document.getElementById('production_arrow_right');
let back_to_top = document.getElementById('back_to_top_container');

let screenHeight = document.documentElement.clientHeight;

let visibleProductNumber = 0;

checkProductNumberPosition();
scrollAnalyze(window.pageYOffset);

function showProductionItem(isRightDirection) {
	let len = productionContainer.children.length-1;

	if(isRightDirection) {
		if(visibleProductNumber == len) {
			return;
		}
		productionContainer.children[visibleProductNumber].classList.add('moving_left');
		visibleProductNumber++;
	} else {
		if(visibleProductNumber == 0) {
			return;
		}
		productionContainer.children[visibleProductNumber].classList.add('moving_right');
		visibleProductNumber--;
	}

	productionContainer.children[visibleProductNumber].classList.remove('moving_right');
	productionContainer.children[visibleProductNumber].classList.remove('moving_left');

	checkProductNumberPosition();
}

function checkProductNumberPosition() {
	if(visibleProductNumber == productionContainer.children.length-1) {
		productionArrowRight.classList.add('hidden_arrow');
	} else if(visibleProductNumber == 0) {
		productionArrowLeft.classList.add('hidden_arrow');
	} else {
		productionArrowRight.classList.remove('hidden_arrow');
		productionArrowLeft.classList.remove('hidden_arrow');
	}
}

function scrollToTop(scrollDuration) {
	let cosParameter = window.scrollY / 2,
	scrollCount = 0,
	oldTimestamp = performance.now();
	function step (newTimestamp) {
		scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
		if (scrollCount >= Math.PI) window.scrollTo(0, 0);
		if (window.scrollY === 0) return;
		window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
		oldTimestamp = newTimestamp;
		window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);
}

function scrollToElem(event, target, scrollDuration) {
	// stopper(event);
	hideMenu();

	let elemTop = document.getElementById(target).getBoundingClientRect().top;
	let currentElemTop = window.scrollY;
	let scrollStep = Math.round((elemTop - currentElemTop)/30);
	oldTimestamp = performance.now();

	function step(newTimestamp) {
		currentElemTop += scrollStep;

		if (elemTop <= currentElemTop) {
			return;
		}

		window.scrollTo(0, currentElemTop);
		oldTimestamp = newTimestamp;
		window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);
}

function scrollAnalyze(offset) {
	if(offset < screenHeight/2) {
		hideBackToTopButton();
	} else {
		showBackToTop();
	}
}

function hideBackToTopButton() {
	back_to_top.classList.add('hidden');
}

function showBackToTop() {
	back_to_top.classList.remove('hidden');
}

function showMenu() {
	document.body.classList.toggle('showing_menu');
}

function hideMenu() {
	document.body.classList.remove('showing_menu');
}

function stopper(event) {
	preventDefault(event);
	event.stopPropagation();
}

window.addEventListener('scroll', function() {
	scrollAnalyze(window.pageYOffset);
});