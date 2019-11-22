let mainImageContainer = document.getElementById('main_image_container');
let miniImagesContainer = document.getElementById('all_image_container');
let popupImageContainer = document.getElementById('popup_image_container');

let miniPictureNumber = 0;
let popupPictureNumber = 0;
let productName = '';

setProductType();

function setProductType() {
	if (mainImageContainer.classList.contains('notfoldchair')) {
		productName = 'chair_2_';
	} else if (mainImageContainer.classList.contains('foldchair')) {
		productName = 'chair_2_';
	} else if (mainImageContainer.classList.contains('softchair')) {
		productName = 'chair_1_';
	} else {
		productName = 'table_';
	}
}

function showMiniProductPicture(num) {
	miniPictureNumber = num;
	mainImageContainer.style.backgroundImage = "url('./img/" + productName + (miniPictureNumber+1) + "_mini.png')";
	setNewMiniImageFocus(miniPictureNumber);
}

function setNewMiniImageFocus(num) {
	for(let i = 0; i < miniImagesContainer.children.length; i++) {
		miniImagesContainer.children[i].classList.remove('focus_image');
	}
	miniImagesContainer.children[num].classList.add('focus_image');
}

function showPopup() {
	popupPictureNumber = miniPictureNumber;
	setNewPopupImage(popupPictureNumber);
	document.body.classList.add('visible_popup');
}

function closePopup() {
	document.body.classList.remove('visible_popup');
}

function setNewPopupImage(imageNum) {
	popupImageContainer.style.backgroundImage = "url('./img/" + productName + (imageNum+1) + ".png')";
}

function showProductItem(isRightDirection) {
	if(isRightDirection) {
		setPopupPictureNumberValue(true);
	} else {
		setPopupPictureNumberValue(false);
	}
	setNewPopupImage(popupPictureNumber);
}

function setPopupPictureNumberValue(isIncrease) {
	if(isIncrease) {
		popupPictureNumber = (popupPictureNumber + 1)%3;
	} else {
		popupPictureNumber = (popupPictureNumber + 2)%3;
	}
}

function scrollToElem(event, target, scrollDuration) {
	event.preventDefault();
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