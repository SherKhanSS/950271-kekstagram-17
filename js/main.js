'use strict';
(function () {

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

})();
