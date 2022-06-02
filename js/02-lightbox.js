import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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