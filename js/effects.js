'use strict';
(function () {


  var WIDTH_OF_LEVEL_LINE = 450;
  var PERCENT = 100;

  var imgUpload = document.querySelector('.img-upload__overlay');
  var imgPreview = imgUpload.querySelector('.img-upload__preview');
  var imgNone = imgUpload.querySelector('.effects__preview--none');
  var imgChrome = imgUpload.querySelector('.effects__preview--chrome');
  var imgSepia = imgUpload.querySelector('.effects__preview--sepia');
  var imgMarvin = imgUpload.querySelector('.effects__preview--marvin');
  var imgPhobos = imgUpload.querySelector('.effects__preview--phobos');
  var imgHeat = imgUpload.querySelector('.effects__preview--heat');
  var effectLevel = imgUpload.querySelector('.effect-level');

  var effectLevel = document.querySelector('.effect-level');
  var effectLevelPin = effectLevel.querySelector('.effect-level__pin');
  var effectLevelDepth = effectLevel.querySelector('.effect-level__depth');
  var effectLevelInput = effectLevel.querySelector('.effect-level__value');

  imgNone.addEventListener('click', function() {
    imgPreview.classList.remove('effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
    imgPreview.classList.add('effects__preview--none');
    effectLevel.classList.add('hidden');
    imgPreview.style.filter = "none";
  });

  imgChrome.addEventListener('click', function() {
    imgPreview.classList.remove('effects__preview--none', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
    imgPreview.classList.add('effects__preview--chrome');
    effectLevel.classList.remove('hidden');
    imgPreview.style.filter = "grayscale(1)";
    effectLevelDepth.style.width = effectLevelPin.style.left = WIDTH_OF_LEVEL_LINE + 'px';
  });

  imgSepia.addEventListener('click', function() {
    imgPreview.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
    imgPreview.classList.add('effects__preview--sepia');
    effectLevel.classList.remove('hidden');
    imgPreview.style.filter = "sepia(1)";
    effectLevelDepth.style.width = effectLevelPin.style.left = WIDTH_OF_LEVEL_LINE + 'px';
  });

  imgMarvin.addEventListener('click', function() {
    imgPreview.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--phobos', 'effects__preview--heat');
    imgPreview.classList.add('effects__preview--marvin');
    effectLevel.classList.remove('hidden');
    imgPreview.style.filter = "invert(100%)";
    effectLevelDepth.style.width = effectLevelPin.style.left = WIDTH_OF_LEVEL_LINE + 'px';
  });

  imgPhobos.addEventListener('click', function() {
    imgPreview.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--heat');
    imgPreview.classList.add('effects__preview--phobos');
    effectLevel.classList.remove('hidden');
    imgPreview.style.filter = "blur(3px)";
    effectLevelDepth.style.width = effectLevelPin.style.left = WIDTH_OF_LEVEL_LINE + 'px';
  });

  imgHeat.addEventListener('click', function() {
    imgPreview.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos');
    imgPreview.classList.add('effects__preview--heat');
    effectLevel.classList.remove('hidden');
    imgPreview.style.filter = "brightness(3)";
    effectLevelDepth.style.width = effectLevelPin.style.left = WIDTH_OF_LEVEL_LINE + 'px';
  });



  effectLevelPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = evt.clientX;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = startCoords - moveEvt.clientX;
      startCoords = moveEvt.clientX;
      var nextCoordinate = effectLevelPin.offsetLeft - shift;
      var pinCoordinate;

          if (nextCoordinate >= WIDTH_OF_LEVEL_LINE) {
            pinCoordinate = WIDTH_OF_LEVEL_LINE + 'px';
          } else if (nextCoordinate <= 0) {
            pinCoordinate = 0 + 'px';
          } else {
            pinCoordinate = nextCoordinate + 'px';
          }

      effectLevelPin.style.left = pinCoordinate;
      effectLevelDepth.style.width = effectLevelPin.style.left;
      effectLevelInput.value = Math.round(effectLevelDepth.offsetWidth * PERCENT / WIDTH_OF_LEVEL_LINE);

      if (imgUpload.querySelector('.effects__preview--chrome') !== imgChrome) {
        imgPreview.style.filter = "grayscale(" + (effectLevelDepth.offsetWidth / WIDTH_OF_LEVEL_LINE).toFixed(1) + ")";
      }

      if (imgUpload.querySelector('.effects__preview--sepia') !== imgSepia) {
        imgPreview.style.filter = "sepia(" + (effectLevelDepth.offsetWidth / WIDTH_OF_LEVEL_LINE).toFixed(1) + ")";
      }

      if (imgUpload.querySelector('.effects__preview--marvin') !== imgMarvin) {
        imgPreview.style.filter = "invert(" + Math.round(PERCENT * effectLevelDepth.offsetWidth / WIDTH_OF_LEVEL_LINE) + "%)";
      }

      if (imgUpload.querySelector('.effects__preview--phobos') !== imgPhobos) {
        var MAX_PHOBOS = 3;
        imgPreview.style.filter = "blur(" + (MAX_PHOBOS * effectLevelDepth.offsetWidth / WIDTH_OF_LEVEL_LINE).toFixed(2) + "px)";
      }

      if (imgUpload.querySelector('.effects__preview--heat') !== imgHeat) {
        var STEP_HEAD = 1;
        var MAX_HEAD = 2;
        imgPreview.style.filter = "brightness(" + (MAX_HEAD * effectLevelDepth.offsetWidth / WIDTH_OF_LEVEL_LINE + STEP_HEAD).toFixed(2) + ")";
      }

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });


})();
