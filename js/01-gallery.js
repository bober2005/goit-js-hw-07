import { galleryItems } from './gallery-items.js';

function createGalleryItem(item) {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
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
  const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  const target = event.target;

  if (target.classList.contains('gallery__image')) {
    const largeImageURL = target.dataset.source;
    const instance = basicLightbox.create(`<img src="${largeImageURL}" alt="${target.alt}">`);
    instance.show();
  }
}