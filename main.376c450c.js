!function(){var e=document.querySelector(".section-text--hidden"),t=document.querySelector(".read-more-link--open"),o=document.querySelector(".read-more-link--close"),d=document.querySelector(".section-text--hidden2"),n=document.querySelector(".read-more-link--open2"),c=document.querySelector(".read-more-link--close2"),r=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)},l=function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!e),d.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",r),o.addEventListener("click",r),n.addEventListener("click",l),c.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=main.376c450c.js.map