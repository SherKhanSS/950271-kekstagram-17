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

 var renderGallery = function (data) {
   var fragment = document.createDocumentFragment();
     for (var i = 0; i < data.length; i++) {
       fragment.appendChild(renderPhotoСard(data[i]));
     }
   photoСardsList.appendChild(fragment);
   };

   var clearCurrentPictures = function () {
     document.querySelectorAll('.picture').forEach(function (picture) {
       picture.remove();
     });
   };

   window.render = {
     renderGallery: renderGallery,
     clearCurrentPictures: clearCurrentPictures
   };

})();
