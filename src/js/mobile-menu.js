(() => {
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const body = document.querySelector('.body');
const closeMenuBtn1 = document.querySelector('.js-close-menu1');
const closeMenuBtn2 = document.querySelector('.js-close-menu2');
const closeMenuBtn3 = document.querySelector('.js-close-menu3');
const closeMenuBtn4 = document.querySelector('.js-close-menu4');
const closeMenuBtn5 = document.querySelector('.js-close-menu5');
const closeMenuBtn6 = document.querySelector('.js-close-menu6');
const closeMenuBtn7 = document.querySelector('.js-close-menu7');

const toggleMenu = () => {
const isMenuOpen =
openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
mobileMenu.classList.toggle('is-open');

const scrollLockMethod = !isMenuOpen
  ? 'disableBodyScroll'
  : 'enableBodyScroll';
bodyScrollLock[scrollLockMethod](document.body);
  };
  
const toggleMenu2 = () => {
const isMenuOpen =
openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
body.classList.toggle('open-mobile-menu');

const scrollLockMethod = !isMenuOpen
  ? 'disableBodyScroll'
  : 'enableBodyScroll';
bodyScrollLock[scrollLockMethod](document.body);
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn1.addEventListener('click', toggleMenu);
closeMenuBtn2.addEventListener('click', toggleMenu);
closeMenuBtn3.addEventListener('click', toggleMenu);
closeMenuBtn4.addEventListener('click', toggleMenu);
closeMenuBtn5.addEventListener('click', toggleMenu);
closeMenuBtn6.addEventListener('click', toggleMenu);
closeMenuBtn7.addEventListener('click', toggleMenu);

openMenuBtn.addEventListener('click', toggleMenu2);
closeMenuBtn1.addEventListener('click', toggleMenu2);
closeMenuBtn2.addEventListener('click', toggleMenu2);
closeMenuBtn3.addEventListener('click', toggleMenu2);
closeMenuBtn4.addEventListener('click', toggleMenu2);
closeMenuBtn5.addEventListener('click', toggleMenu2);
closeMenuBtn6.addEventListener('click', toggleMenu2);
closeMenuBtn7.addEventListener('click', toggleMenu2);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
if (!e.matches) return;
mobileMenu.classList.remove('is-open');
openMenuBtn.setAttribute('aria-expanded', false);
bodyScrollLock.enableBodyScroll(document.body);
});
})();