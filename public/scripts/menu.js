import { elements } from './elements.js';

const { nav, toggle, links, header, sections } = elements;

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

export function changeHeaderColorWhenScroll() {
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

export function activateNavlinkAtCurrentSession() {
  const lineLimitCurrent = window.pageYOffset + (window.innerHeight / 8) * 4;

  for(const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const lineLimitStart = lineLimitCurrent >= sectionTop;
    const lineLimitEnd = lineLimitCurrent <= sectionTop + sectionHeight;

    if(lineLimitStart && lineLimitEnd) {
      document.querySelector(`nav ul li a[href*=${sectionId}]` ).classList.add('active');
    } else {
      document.querySelector(`nav ul li a[href*=${sectionId}]` ).classList.remove('active');
    }
  }
}