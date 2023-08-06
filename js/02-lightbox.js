import { galleryItems } from './gallery-items.js';


function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
  `;
}


function renderGallery() {
  const galleryList = document.querySelector('.gallery');
  const galleryItemsMarkup = galleryItems.map(createGalleryItem).join('');
  galleryList.innerHTML = galleryItemsMarkup;
}

renderGallery();


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});
