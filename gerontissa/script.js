let productionContainer = document.getElementById('production_container');
let productionArrowLeft = document.getElementById('production_arrow_left');
let productionArrowRight = document.getElementById('production_arrow_right');

let visibleProductNumber = 0;

checkProductNumberPosition();

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