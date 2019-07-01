'use strict';

var NAME = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var COMMENT = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var MIN_LIKES = 15;
var MAX_LIKES = 200;
var MIN_COMMENT = 1;
var MAX_COMMENT = 10;
var MAX_AVATAR = 6;
var MAX_CARDS = 25;

var getRandom = function (min, max) {
  return Math.random() * (max - min) + min;
};

var getComments = function () {
  var userСards = [];
  for(var i = 0; i < Math.round(getRandom(MIN_COMMENT, MAX_COMMENT)); i++) {
    userСards.push({
      avatar: 'img/avatar-' + Math.round(getRandom(1, MAX_AVATAR)) + '.svg',
      message: COMMENT[Math.round(getRandom(0, COMMENT.length - 1))],
      name: NAME[Math.round(getRandom(0, NAME.length - 1))]
    })
}
  return userСards;
};

var photoСards = [];
  for(var i = 0; i < MAX_CARDS; i++) {
    photoСards.push({
      url: 'photos/' + (i + 1) + '.jpg',
      likes: Math.round(getRandom(MIN_LIKES, MAX_LIKES)),
      comments: getComments ()
    })
};

var photoСardsList = document.querySelector('.pictures');

var renderPhotoСard = function (photoСard) {
  var tpl = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);

  tpl.querySelector('.picture__img').src = photoСard.url;
  tpl.querySelector('.picture__likes').textContent = photoСard.likes;
  tpl.querySelector('.picture__comments').textContent = photoСard.comments.length;

  return tpl;
}

var fragment = document.createDocumentFragment();
  for (var i = 0; i < photoСards.length; i++) {
    fragment.appendChild(renderPhotoСard(photoСards[i]));
  }
photoСardsList.appendChild(fragment);



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


var imgNone = imgUpload.querySelector('.effects__preview--none');
var imgChrome = imgUpload.querySelector('.effects__preview--chrome');
var imgSepia = imgUpload.querySelector('.effects__preview--sepia');
var imgMarvin = imgUpload.querySelector('.effects__preview--marvin');
var imgPhobos = imgUpload.querySelector('.effects__preview--phobos');
var imgHeat = imgUpload.querySelector('.effects__preview--heat');
var effectLevel = imgUpload.querySelector('.effect-level');
// var effectLevelPin = imgUpload.querySelector('.effect-level__pin');
//
// effectLevelPin.addEventListener('mouseup', function() {
// });

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
});

imgSepia.addEventListener('click', function() {
  imgPreview.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
  imgPreview.classList.add('effects__preview--sepia');
  effectLevel.classList.remove('hidden');
  imgPreview.style.filter = "sepia(1)";
});

imgMarvin.addEventListener('click', function() {
  imgPreview.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--phobos', 'effects__preview--heat');
  imgPreview.classList.add('effects__preview--marvin');
  effectLevel.classList.remove('hidden');
  imgPreview.style.filter = "invert(100%)";
});

imgPhobos.addEventListener('click', function() {
  imgPreview.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--heat');
  imgPreview.classList.add('effects__preview--phobos');
  effectLevel.classList.remove('hidden');
  imgPreview.style.filter = "blur(3px)";
});

imgHeat.addEventListener('click', function() {
  imgPreview.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos');
  imgPreview.classList.add('effects__preview--heat');
  effectLevel.classList.remove('hidden');
  imgPreview.style.filter = "brightness(3)";
});
