!function(){var e=document.querySelector(".section-text--hidden"),o=document.querySelector(".read-more-link--open"),t=document.querySelector(".read-more-link--close"),n=function(){var t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=main.138ee9f2.js.map
