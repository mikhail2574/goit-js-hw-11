API_KEY="38966446-c32fc19d0a971996be7b08c24";let e=1;let t=document.querySelector(".search-form"),n=document.querySelector(".gallery"),o=document.querySelector("[js-load]");function a(e){const{webformatURL:t,tags:n,views:o,likes:a,comments:i,downloads:s}=e;return`<div class="photo-card">\n    <img src="${t}" alt="${n}" width="335" height="200" class="image" loading="lazy" />\n    <div class="info">\n      <p class="info-item">\n        <b>Likes</b> ${a}\n      </p>\n      <p class="info-item">\n        <b>Views</b> ${o}\n      </p>\n      <p class="info-item">\n        <b>Comments</b> ${i}\n      </p>\n      <p class="info-item">\n        <b>Downloads</b> ${s}\n      </p>\n    </div>\n  </div>`}t.addEventListener("submit",(e=>{var t;e.preventDefault(),t=e.target.searchQuery.value,fetch(`https://pixabay.com/api/?key=${API_KEY}&image_type=photo&q=${t}&orientation=horizontal&safesearch=true&per_page=40&page=1`).then((e=>e.json())).catch((e=>{throw e})).then((e=>{0!=e.totalHits?n.innerHTML=e.hits.map((e=>a(e))).join(""):console.log("Not found!!!")})).catch((e=>{throw e}))})),o.addEventListener("click",(()=>{var t;t=document.querySelector("[type='text']").value,e+=1,fetch(`https://pixabay.com/api/?key=${API_KEY}&image_type=photo&q=${t}&orientation=horizontal&safesearch=true&per_page=40&page=${e}`).then((e=>e.json())).catch((e=>{throw e})).then((e=>{0!=e.totalHits?n.innerHTML+=e.hits.map((e=>a(e))).join(""):console.log("Not found!!!")})).catch((e=>{throw e}))}));
//# sourceMappingURL=index.83d76863.js.map
