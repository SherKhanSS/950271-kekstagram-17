'use strict';
(function () {
  var WIDTH_OF_LEVEL_LINE = 450;

  var effectLevel = document.querySelector('.effect-level');
  var effectLevelPin = effectLevel.querySelector('.effect-level__pin');
  var effectLevelDepth = effectLevel.querySelector('.effect-level__depth');
  var effectLevelInput = effectLevel.querySelector('.effect-level__value');

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

      // if (imgUpload.querySelector('.effects__preview--chrome') !== imgChrome) {
      //   var grayScale = pinCoordinate / WIDTH_OF_LEVEL_LINE;
      //   imgPreview.style.filter = "grayscale(" + grayScale.toFixed(1) + ")";
      // }
      //
      // if (imgUpload.querySelector('.effects__preview--marvin') !== imgMarvin) {
      //   imgPreview.style.filter = "invert(" + Math.round(100 * pinCoordinate / WIDTH_OF_LEVEL_LINE) + "%)";
      // }

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
