/* Animaciones suaves al bajar */
(function(){
  if(!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var sel='section .label, section h2, .work, .craft, .about .text p, .facts div, .player, .book, .vcard, .step, .cite, .contact p, .mail, .gintro';
  var els=[].slice.call(document.querySelectorAll(sel));
  document.documentElement.classList.add('anim-on');
  var io=new IntersectionObserver(function(ents){
    ents.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  els.forEach(function(el){
    var sib=el.parentElement?[].slice.call(el.parentElement.children).filter(function(c){return els.indexOf(c)>-1}):[];
    var i=sib.indexOf(el); el.style.transitionDelay=Math.min(i,6)*70+'ms';
    var r=el.getBoundingClientRect(); if(r.top<innerHeight*0.92){ el.classList.add('in'); } else { el.classList.add('rv'); io.observe(el); }
  });
})();
