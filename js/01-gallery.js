import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const createGalleryItems = ({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}" >
    <img class="gallery__image"
    src="${preview}" 
    data-source="${original}" 
    alt="${description}">
    </a>
    </div>`; 
}

const createGallery = galleryItems.map(createGalleryItems).join('');

galleryRef.insertAdjacentHTML('beforeend', createGallery);
galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    modalShow(event.target.dataset.source);
}

function modalShow(src) {
    const onEscClick = event => {
        if (event.code === 'Escape') {
        instance.close();
    }
    }
    const instance = basicLightbox.create(
        `<img src="${src}" width="1000" heigth="800">`,

        {
            onShow: instance => {
                window.addEventListener('keydown', onEscClick);
            },

            onClose: instance => {
                window.removeEventListener('keydown', onEscClick);
            },
        },
    );
    instance.show();
    
}
