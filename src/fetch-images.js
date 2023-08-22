// ## Initializing ##
const BASE_URL = 'https://pixabay.com/api/';
API_KEY = '38966446-c32fc19d0a971996be7b08c24';

const image_type = 'photo';
const orientation = 'horizontal';
const safesearch = true;
const per_page = 40;
let page = 1;

export function getImages(text) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&image_type=${image_type}&q=${text}&orientation=${orientation}&safesearch=${safesearch}&per_page=${per_page}&page=1`
  )
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}
export function getImagesNext(text) {
  page += 1;
  return fetch(
    `${BASE_URL}?key=${API_KEY}&image_type=${image_type}&q=${text}&orientation=${orientation}&safesearch=${safesearch}&per_page=${per_page}&page=${page}`
  )
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}
