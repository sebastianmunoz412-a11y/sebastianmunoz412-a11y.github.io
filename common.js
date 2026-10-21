(function(){
  const els=[...document.querySelectorAll('[data-es]')];
  const bES=document.getElementById('lang-es'), bEN=document.getElementById('lang-en');
  function setLang(l){
    els.forEach(e=>{e.innerHTML=e.dataset[l]});
    document.documentElement.lang=l;
    bES.setAttribute('aria-pressed',l==='es'); bEN.setAttribute('aria-pressed',l==='en');
    try{localStorage.setItem('lang',l)}catch(e){}
    document.dispatchEvent(new CustomEvent('langchange',{detail:l}));
  }
  bES.onclick=()=>setLang('es'); bEN.onclick=()=>setLang('en');
  let saved=null; try{saved=localStorage.getItem('lang')}catch(e){}
  window.setLang=setLang;
  setLang(saved==='en'?'en':'es');
})();
