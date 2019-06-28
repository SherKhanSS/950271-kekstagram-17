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

buttonSmaller.addEventListener('click', function() {
  // inputScale.value = ?;
});


// var imgPreview = imgUpload.querySelector('.img-upload__preview');
// var imgNone = imgUpload.querySelector('.effects__preview--none');
// var imgChrome = imgUpload.querySelector('.effects__preview--chrome');
// var imgSepia = imgUpload.querySelector('.effects__preview--sepia');
// var imgMarvin = imgUpload.querySelector('.effects__preview--marvin');
// var imgPhobos = imgUpload.querySelector('.effects__preview--phobos');
// var imgHeat = imgUpload.querySelector('.effects__preview--heat');
