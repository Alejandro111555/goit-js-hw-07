// В файле gallery-items.js есть массив galleryItems, который содержит объекты с информацией о изображениях: маленькое (превью), оригинальное (большое) и описание.
// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне.
//  используя библиотеку SimpleLightbox, которая возьмет на себя обработку кликов по изображениям,
//  открытие и закрытие модального окна, а также пролистывание изображений при помощи клавиатуры.


import { galleryItems } from './gallery-items.js';

const galleryWrapper = document.querySelector('.gallery');

const imgList = galleryItems.map(({preview,description,original})=> `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /> </a> `).join('');
  galleryWrapper.insertAdjacentHTML('beforeend',imgList);

  galleryWrapper.addEventListener('click' , bigImgGallery);

  let gallery = new SimpleLightbox('.gallery a',{
    captionsData:`alt`,
    captionDelay:250 
  });

  function bigImgGallery (event) {
    if (event.target.nodeName !== "IMG") {
        return;
      }
}