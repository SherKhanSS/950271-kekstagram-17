'use strict';
(function () {

var photoСardsList = document.querySelector('.pictures');

var renderPhotoСard = function (photoСard) {
  var tpl = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);

  tpl.querySelector('.picture__img').src = photoСard.url;
  tpl.querySelector('.picture__likes').textContent = photoСard.likes;
  tpl.querySelector('.picture__comments').textContent = photoСard.comments.length;

  return tpl;
}

window.load(function (photoСards) {
  var fragment = document.createDocumentFragment();
    for (var i = 0; i < photoСards.length; i++) {
      fragment.appendChild(renderPhotoСard(photoСards[i]));
    }
  photoСardsList.appendChild(fragment);
 });

})();
