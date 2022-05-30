import { changeHeaderColorWhenScroll } from './menu.js';
import { backToTop } from './backToTopButton.js'

window.addEventListener('scroll', () => {
  changeHeaderColorWhenScroll();
  backToTop()
})