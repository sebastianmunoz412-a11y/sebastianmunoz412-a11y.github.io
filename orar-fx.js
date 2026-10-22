/* ===== Orar: efectos (texto que se escribe, palabras que se iluminan) ===== */
(function(){
var L=function(){return document.documentElement.lang==='en'?'en':'es'};
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --- "Hoy necesito…" que se escribe solo --- */
var W={es:[["estar con Jesús","#adoracion"],["estar con María","#rosario-sec"],["escuchar a Dios","#una-palabra"],["el perdón de Dios","#examen"],["una capilla cerca","#donde"]],
       en:[["to be with Jesus","#adoracion"],["to be with Mary","#rosario-sec"],["to hear God","#una-palabra"],["God’s forgiveness","#examen"],["a chapel nearby","#donde"]]};
var out=document.getElementById('o-type'), ask=document.getElementById('o-ask'), wi=0, ci=0, del=false, tmr=null;
function step(){
  var list=W[L()], w=list[wi%list.length][0];
  ask.setAttribute('href',list[wi%list.length][1]);
  if(reduce){out.textContent=w;tmr=setTimeout(function(){wi++;step()},2600);return}
  if(!del){ci++;out.textContent=w.slice(0,ci);if(ci>=w.length){del=true;tmr=setTimeout(step,1700);return}tmr=setTimeout(step,55+Math.random()*50)}
  else{ci--;out.textContent=w.slice(0,ci);if(ci<=0){del=false;wi++;tmr=setTimeout(step,300);return}tmr=setTimeout(step,28)}
}
if(out&&ask){step();document.addEventListener('langchange',function(){clearTimeout(tmr);ci=0;del=false;step()})}

/* --- Títulos: las palabras se iluminan al bajar --- */
function split(h){
  var walk=function(n){[].slice.call(n.childNodes).forEach(function(c){
    if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(t))}else{var s=document.createElement('span');s.className='w';s.textContent=t;f.appendChild(s)}});n.replaceChild(f,c)}
    else if(c.nodeType===1&&c.tagName!=='BR')walk(c)})};
  walk(h);h._w=[].slice.call(h.querySelectorAll('.w'));
}
var H=[].slice.call(document.querySelectorAll('.o-rv'));
function all(){H.forEach(split);paint()}
function paint(){
  var vh=window.innerHeight;
  H.forEach(function(h){
    var r=h.getBoundingClientRect(); if(r.bottom<-50||r.top>vh+50)return;
    var p=reduce?1:Math.min(1,Math.max(0,(vh*0.92-r.top)/(vh*0.45)));
    var n=h._w.length;
    h._w.forEach(function(s,i){var on=p*n*1.15-i;s.style.opacity=(0.18+0.82*Math.min(1,Math.max(0,on))).toFixed(3)});
  });
}
if(H.length){all();window.addEventListener('scroll',paint,{passive:true});window.addEventListener('resize',paint);document.addEventListener('langchange',function(){setTimeout(all,0)})}

/* --- Acto de contrición --- */
var AC={es:["Señor mío Jesucristo, Dios y hombre verdadero, Creador, Padre y Redentor mío; por ser Tú quien eres, bondad infinita, y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido; también me pesa porque puedes castigarme con las penas del infierno. Ayudado de tu divina gracia, propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me fuere impuesta. Amén.",
"Dios mío, me arrepiento de todo corazón de todo lo malo que he hecho y de lo bueno que he dejado de hacer, porque pecando te he ofendido a ti, que eres el sumo bien y digno de ser amado sobre todas las cosas. Propongo firmemente, con tu gracia, cumplir la penitencia, no volver a pecar y evitar las ocasiones de pecado. Perdóname, Señor, por los méritos de la Pasión de nuestro Salvador Jesucristo. Amén."],
en:["My God, I am sorry for my sins with all my heart. In choosing to do wrong and failing to do good, I have sinned against you whom I should love above all things. I firmly intend, with your help, to do penance, to sin no more, and to avoid whatever leads me to sin. Our Savior Jesus Christ suffered and died for us. In his name, my God, have mercy. Amen.",
"O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasion of sin. Amen."]};
var acT=document.getElementById('ac-text'),acI=0;
function ac(){if(!acT)return;acT.textContent=AC[L()][acI];document.querySelectorAll('.ac-tabs button').forEach(function(b){b.setAttribute('aria-pressed',+b.dataset.a===acI)})}
document.querySelectorAll('.ac-tabs button').forEach(function(b){b.addEventListener('click',function(){acI=+b.dataset.a;ac()})});
ac();document.addEventListener('langchange',function(){setTimeout(ac,0)});
var gc=document.getElementById('go-conf');
if(gc)gc.addEventListener('click',function(){var f=document.querySelector('.ad-f button[data-f="cf"]');if(f)f.click()});
})();
