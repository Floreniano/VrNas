const header = document.getElementById('header');
const nav = document.getElementById('nav');
window.addEventListener('scroll', (e) => {
  if (window.pageYOffset != 0) {
    header.classList.add('header-bg');
  } else {
    header.classList.remove('header-bg');
  }
});
