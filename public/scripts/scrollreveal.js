const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
})

scrollReveal.reveal(
  `#home .img-container, #home .text-container,
  #about .img-container, #about .text-container,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text-container, #contact .links,
  footer .brand, footer .social
`, 
{ interval: 100 })