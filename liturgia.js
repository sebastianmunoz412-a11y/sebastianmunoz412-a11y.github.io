/* Tiempo litúrgico automático: cambia el color de acento según el calendario de la Iglesia */
(function(){
  function easter(y){var a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),mo=Math.floor((h+l-7*m+114)/31),da=((h+l-7*m+114)%31)+1;return new Date(y,mo-1,da)}
  function add(d,n){var x=new Date(d);x.setDate(x.getDate()+n);return x}
  function same(a,b){return a.getFullYear()==b.getFullYear()&&a.getMonth()==b.getMonth()&&a.getDate()==b.getDate()}
  var now=new Date(), t=new Date(now.getFullYear(),now.getMonth(),now.getDate()), y=t.getFullYear();
  var xmas=new Date(y,11,25), adv1=add(xmas,-((xmas.getDay()||7))-21); /* 4 domingos antes de Navidad */
  var jan6=new Date(y,0,6), bapt=add(jan6,7-(jan6.getDay()||7)); if(bapt.getDate()===6) bapt=add(bapt,7); /* domingo después del 6 de enero */
  var E=easter(y), ash=add(E,-46), palm=add(E,-7), gfri=add(E,-2), pent=add(E,49), gaud=add(adv1,14), laet=add(E,-21);
  var s;
  if(t>=adv1 && t<xmas) s=same(t,gaud)?'gaudete':'adviento';
  else if(t>=xmas || t<=bapt) s='navidad';
  else if(t>=ash && t<add(E,-3)) s=same(t,palm)?'ramos':(same(t,laet)?'laetare':'cuaresma');
  else if(t>=add(E,-3) && t<E) s=same(t,gfri)?'viernes':'triduo';
  else if(t>=E && t<pent) s='pascua';
  else if(same(t,pent)) s='pentecostes';
  else s='ordinario';
  var S={
    adviento:{c:'#6b4a7a',es:'Tiempo de Adviento',en:'Season of Advent'},
    gaudete:{c:'#b5677f',es:'Domingo de Gaudete',en:'Gaudete Sunday'},
    navidad:{c:'#a8842f',es:'Tiempo de Navidad',en:'Christmas Season'},
    cuaresma:{c:'#6b4a7a',es:'Tiempo de Cuaresma',en:'Season of Lent'},
    laetare:{c:'#b5677f',es:'Domingo de Laetare',en:'Laetare Sunday'},
    ramos:{c:'#9a2f2f',es:'Domingo de Ramos',en:'Palm Sunday'},
    triduo:{c:'#a8842f',es:'Triduo Pascual',en:'Paschal Triduum'},
    viernes:{c:'#9a2f2f',es:'Viernes Santo',en:'Good Friday'},
    pascua:{c:'#a8842f',es:'Tiempo de Pascua',en:'Easter Season'},
    pentecostes:{c:'#9a2f2f',es:'Domingo de Pentecostés',en:'Pentecost Sunday'},
    ordinario:{c:'#4f6b45',es:'Tiempo Ordinario',en:'Ordinary Time'}
  }[s];
  var r=document.documentElement; r.style.setProperty('--accent',S.c); r.setAttribute('data-tiempo',s);
  function badge(){
    var f=document.querySelector('footer .wrap'); if(!f||document.getElementById('tiempo')) return;
    var b=document.createElement('span'); b.id='tiempo'; b.className='tiempo';
    b.innerHTML='<i style="background:'+S.c+'"></i><span data-es="'+S.es+'" data-en="'+S.en+'">'+(r.lang==='en'?S.en:S.es)+'</span>';
    f.appendChild(b);
    document.addEventListener('langchange',function(e){b.lastChild.textContent=e.detail==='en'?S.en:S.es});
    ['lang-es','lang-en'].forEach(function(id){var x=document.getElementById(id); if(x) x.addEventListener('click',function(){b.lastChild.textContent=id==='lang-en'?S.en:S.es})});
  }
  if(document.readyState!=='loading') badge(); else document.addEventListener('DOMContentLoaded',badge);
})();
