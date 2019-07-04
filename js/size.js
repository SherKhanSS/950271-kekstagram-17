'use strict';
(function () {

var imgUpload = document.querySelector('.img-upload__overlay');
var buttonSmaller = imgUpload.querySelector('.scale__control--smaller');
var buttonBigger = imgUpload.querySelector('.scale__control--bigger');
var inputScale = imgUpload.querySelector('.scale__control--value');
var imgPreview = imgUpload.querySelector('.img-upload__preview');



buttonSmaller.addEventListener('click', function() {
  var scale = inputScale.value;
    if(scale == "100%") {
      return inputScale.value = "75%";
    }
    if(scale == "75%") {
      return inputScale.value = "50%";
    }
    if(scale == "50%") {
      return inputScale.value = "25%";
    }
});

buttonSmaller.addEventListener('click', function() {
  var scale = inputScale.value;
    if(scale == "75%") {
      return imgPreview.style.transform = "scale(0.75)";
    }
    if(scale == "50%") {
      return imgPreview.style.transform = "scale(0.50)";
    }
    if(scale == "25%") {
      return imgPreview.style.transform = "scale(0.25)";
    }
});

buttonBigger.addEventListener('click', function() {
  var scale = inputScale.value;
    if(scale == "25%") {
      return inputScale.value = "50%";
    }
    if(scale == "50%") {
      return inputScale.value = "75%";
    }
    if(scale == "75%") {
      return inputScale.value = "100%";
    }
});

buttonBigger.addEventListener('click', function() {
  var scale = inputScale.value;
    if(scale == "50%") {
      return imgPreview.style.transform = "scale(0.50)";
    }
    if(scale == "75%") {
      return imgPreview.style.transform = "scale(0.75)";
    }
    if(scale == "100%") {
      return imgPreview.style.transform = "scale(1)";
    }
});

})();
