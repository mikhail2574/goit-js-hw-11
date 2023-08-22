// Import
import { getImages, getImagesNext } from './fetch-images';
// ## Initialization ##
let form = document.querySelector('.search-form');
let gallery = document.querySelector('.gallery');
let btnLoad = document.querySelector('[js-load]');
// Function on search
form.addEventListener('submit', evt => {
  evt.preventDefault();
  setMarkup(getImages(evt.target.searchQuery.value));
});

btnLoad.addEventListener('click', () => {
  setMarkupNext(getImagesNext(document.querySelector("[type='text']").value));
});

// Setting markup for gallery
function setMarkup(response) {
  response
    .then(images => {
      if (images.totalHits == 0) {
        console.log('Not found!!!');
        return;
      }
      gallery.innerHTML = images.hits
        .map(image => {
          return setImage(image);
        })
        .join('');
    })
    .catch(error => {
      throw error;
    });
}

function setMarkupNext(response) {
  response
    .then(images => {
      if (images.totalHits == 0) {
        console.log('Not found!!!');
        return;
      }
      gallery.innerHTML += images.hits
        .map(image => {
          return setImage(image);
        })
        .join('');
    })
    .catch(error => {
      throw error;
    });
}

function setImage(image) {
  const { webformatURL, tags, views, likes, comments, downloads } = image;
  return `<div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" width="335" height="200" class="image" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b> ${likes}
      </p>
      <p class="info-item">
        <b>Views</b> ${views}
      </p>
      <p class="info-item">
        <b>Comments</b> ${comments}
      </p>
      <p class="info-item">
        <b>Downloads</b> ${downloads}
      </p>
    </div>
  </div>`;
}
