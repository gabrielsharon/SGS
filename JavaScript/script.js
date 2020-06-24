const header = document.querySelector('.header');
const headerContent = header.querySelector('.header-content');

window.addEventListener('scroll', e => {
  headerContent.style.top = `${50 + (window.pageYOffset / 16)}%`
});