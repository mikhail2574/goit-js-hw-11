// ## Initializing ##
import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

let page = 1;

export async function getImages(text) {
  const params = new URLSearchParams({
    q: text,
    key: '38966446-c32fc19d0a971996be7b08c24',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  });
  return await axios.get(`${BASE_URL}?${params}`);
}
export async function getImagesNext(text) {
  page += 1;
  const params = new URLSearchParams({
    q: text,
    key: '38966446-c32fc19d0a971996be7b08c24',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  });
  return await axios.get(`${BASE_URL}?${params}`);
}
