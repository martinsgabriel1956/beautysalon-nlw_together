import { elements } from './elements.js';

const { backToTopButton } = elements;

export function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}