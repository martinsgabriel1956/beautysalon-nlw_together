import { elements } from './elements.js';

const { nav, toggle, links, header } = elements;

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

for(const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
}

const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
})