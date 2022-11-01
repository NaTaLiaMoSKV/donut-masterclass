(() => {
const hiddenText = document.querySelector('.section-text--hidden');
const openLink = document.querySelector('.read-more-link--open');
const closeLink = document.querySelector('.read-more-link--close');
const programhiddenText = document.querySelector('.section-text--hidden2');
const programopenLink = document.querySelector('.read-more-link--open2');
const programcloseLink = document.querySelector('.read-more-link--close2');

const toggleMenu = () => {
const isMenuOpen =
openLink.getAttribute('aria-expanded') === 'true' || false;
openLink.setAttribute('aria-expanded', !isMenuOpen);
hiddenText.classList.toggle('is-open');

const scrollLockMethod = !isMenuOpen
  ? 'disableBodyScroll'
  : 'enableBodyScroll';
bodyScrollLock[scrollLockMethod](document.body);
  };

const toggleMenu2 = () => {
const isMenuOpen =
programopenLink.getAttribute('aria-expanded') === 'true' || false;
programopenLink.setAttribute('aria-expanded', !isMenuOpen);
programhiddenText.classList.toggle('is-open');

const scrollLockMethod = !isMenuOpen
  ? 'disableBodyScroll'
  : 'enableBodyScroll';
bodyScrollLock[scrollLockMethod](document.body);
  };

openLink.addEventListener('click', toggleMenu);
closeLink.addEventListener('click', toggleMenu);
programopenLink.addEventListener('click', toggleMenu2);
programcloseLink.addEventListener('click', toggleMenu2);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
if (!e.matches) return;
hiddenText.classList.remove('is-open');
// openMenuBtn.setAttribute('aria-expanded', false);
bodyScrollLock.enableBodyScroll(document.body);
});
})();