const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible')
  })
}, { threshold: 0.12 })

document.querySelectorAll('.glass-card, .feature-grid article, .road-grid article, .integration-bar').forEach((el) => {
  el.classList.add('reveal')
  reveal.observe(el)
})
