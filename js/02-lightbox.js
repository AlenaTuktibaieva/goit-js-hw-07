import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const createGalleryItems = ({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}" >
    <img class="gallery__image"
    src="${preview}"  
    alt="${description}">
    </a>`; 
}

const createGallery = galleryItems.map(createGalleryItems).join('');

galleryRef.insertAdjacentHTML('beforeend', createGallery);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});