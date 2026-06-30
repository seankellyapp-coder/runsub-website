const items = document.querySelectorAll('.reveal,.journey-card,.dash-card,.roadmap-node');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{ if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
},{threshold:.12});
items.forEach((item)=>observer.observe(item));
