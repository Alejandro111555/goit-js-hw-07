// В файле gallery-items.js есть массив galleryItems, который содержит объекты с информацией о изображениях: маленькое (превью), оригинальное (большое) и описание.
// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне.

import { galleryItems } from './gallery-items.js';

const galleryWrapper = document.querySelector('.gallery');

const imgList = galleryItems.map(({preview,description,original})=> `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`).join('');

galleryWrapper.insertAdjacentHTML('beforeend',imgList);

galleryWrapper.addEventListener('click',gettingBigImage);

 function gettingBigImage (event) {
  
if (event.target.nodeName !== 'IMG' ) {return};
event.preventDefault();

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()

if(basicLightbox.visible()) {
 window.addEventListener('keydown',onEscClick);
}

function onEscClick(e) {
    if (e.code === "Escape") instance.close();
}


  }
   
 