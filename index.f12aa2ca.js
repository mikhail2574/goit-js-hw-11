!function(){var n="https://pixabay.com/api/";API_KEY="38966446-c32fc19d0a971996be7b08c24";var t="photo",c="horizontal",o=1;var e=document.querySelector(".search-form"),a=document.querySelector(".gallery"),i=document.querySelector("[js-load]");function r(n){var t=n.webformatURL,c=n.tags,o=n.views,e=n.likes,a=n.comments,i=n.downloads;return'<div class="photo-card">\n    <img src="'.concat(t,'" alt="').concat(c,'" width="335" height="200" class="image" loading="lazy" />\n    <div class="info">\n      <p class="info-item">\n        <b>Likes</b> ').concat(e,'\n      </p>\n      <p class="info-item">\n        <b>Views</b> ').concat(o,'\n      </p>\n      <p class="info-item">\n        <b>Comments</b> ').concat(a,'\n      </p>\n      <p class="info-item">\n        <b>Downloads</b> ').concat(i,"\n      </p>\n    </div>\n  </div>")}e.addEventListener("submit",(function(o){var e;o.preventDefault(),e=o.target.searchQuery.value,fetch("".concat(n,"?key=").concat(API_KEY,"&image_type=").concat(t,"&q=").concat(e,"&orientation=").concat(c,"&safesearch=").concat(!0,"&per_page=").concat(40,"&page=1")).then((function(n){return n.json()})).catch((function(n){throw n})).then((function(n){0!=n.totalHits?a.innerHTML=n.hits.map((function(n){return r(n)})).join(""):console.log("Not found!!!")})).catch((function(n){throw n}))})),i.addEventListener("click",(function(){var e;e=document.querySelector("[type='text']").value,o+=1,fetch("".concat(n,"?key=").concat(API_KEY,"&image_type=").concat(t,"&q=").concat(e,"&orientation=").concat(c,"&safesearch=").concat(!0,"&per_page=").concat(40,"&page=").concat(o)).then((function(n){return n.json()})).catch((function(n){throw n})).then((function(n){0!=n.totalHits?a.innerHTML+=n.hits.map((function(n){return r(n)})).join(""):console.log("Not found!!!")})).catch((function(n){throw n}))}))}();
//# sourceMappingURL=index.f12aa2ca.js.map
