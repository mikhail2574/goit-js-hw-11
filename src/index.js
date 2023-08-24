// Import
import { getImages, getImagesNext } from './fetch-images';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
// ## Initialization ##
let form = document.querySelector('.search-form');
let gallery = document.querySelector('.gallery');
let btnLoad = document.querySelector('[js-load]');
let page = 1;

let onSubmit = async function (evt) {
  evt.preventDefault();
  setMarkup(await getImages(evt.target.searchQuery.value));
  var lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};

let onClick = async function (evt) {
  setMarkupNext(
    await getImagesNext(document.querySelector("[type='text']").value)
  );
};

// Function on search
form.addEventListener('submit', onSubmit);

btnLoad.addEventListener('click', onClick);

// Setting markup for gallery
function setMarkup(images) {
  if (images == undefined) {
    return;
  }
  const {
    data: { hits, totalHits },
  } = images;
  if (totalHits == 0) {
    Notiflix.Notify.failure('Not found');
    return;
  }
  Notiflix.Notify.success('Found: ' + totalHits + ' images!');
  btnLoad.classList.remove('invisible');
  btnLoad.classList.add('load-btn');
  if (totalHits <= 40) {
    btnLoad.classList.add('invisible');
  }
  gallery.innerHTML = hits
    .map(image => {
      return setImage(image);
    })
    .join('');
}

function setMarkupNext(images) {
  const {
    data: { hits, totalHits },
  } = images;
  if (totalHits == 0) {
    Notiflix.Notify.failure('Not found');
    return;
  }
  btnLoad.classList.remove('invisible');
  page += 1;
  if (totalHits <= 40 * page) {
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
    btnLoad.classList.add('invisible');
  }
  gallery.innerHTML += hits
    .map(image => {
      return setImage(image);
    })
    .join('');
}

function setImage(image) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    views,
    likes,
    comments,
    downloads,
  } = image;
  return `  
  <div class="photo-card gallery__item">
  <a href="${largeImageURL}">
    <img class="gallery__image" src="${webformatURL}" alt="${tags}" width="335" height="200" class="image" loading="lazy" />
      </a>

    
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
  </div>
  `;
}
