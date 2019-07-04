'use strict';
(function () {

var imgInput = document.querySelector('.img-upload__input');
var imgUpload = document.querySelector('.img-upload__overlay');
var buttonCancel = imgUpload.querySelector('.img-upload__cancel');

var ESC_KEYCODE = 27;

var openImgUpload = function() {
  imgUpload.classList.remove('hidden');
  document.addEventListener('keydown', onEscPress);
};

var closeImgUpload = function() {
  imgUpload.classList.add('hidden');
  document.removeEventListener('keydown', onEscPress);
};

var onEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeImgUpload();
  }
};

imgInput.addEventListener('change', function() {
  openImgUpload();
});

buttonCancel.addEventListener('click', function() {
  closeImgUpload();
});

})();
