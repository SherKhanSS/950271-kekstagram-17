'use strict';
(function () {

var DEFAULT_VALUE = 100;
var currentScale = DEFAULT_VALUE;
var MIN_SCALE = 25;
var MAX_SCALE = 100;
var SCALE_STEP = 25;

var renderScaledImage = function (value) {
  var scaleValueElement = document.querySelector('.scale__control--value');
  var image = document.querySelector('.img-upload__preview');
  scaleValueElement.value = value + '%';
  image.style.transform = 'scale(' + value / 100 + ')';
};

document.querySelector(`.scale`).addEventListener('click', function (evt) {
	if (evt.target.tagName === 'BUTTON') {
		if ((evt.target.classList.contains('scale__control--smaller') && currentScale === MIN_SCALE) ||
		(evt.target.classList.contains('scale__control--bigger') && currentScale === MAX_SCALE)) {
			return;
		}
		renderScaledImage(currentScale += evt.target.classList.contains('scale__control--smaller') ? -SCALE_STEP : SCALE_STEP);
	}
});

})();
