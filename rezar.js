/* ===== Rezar: Una palabra para ti · Rosario · Examen de conciencia ===== */
(function(){
var L=function(){return document.documentElement.lang==='en'?'en':'es'};

/* ---------- Una palabra para ti ---------- */
var V=[
["No temas, porque yo estoy contigo.","Do not fear, for I am with you.","Is 41,10","Isa 41:10"],
["Venid a mí todos los que estáis cansados y agobiados, y yo os aliviaré.","Come to me, all you who labor and are burdened, and I will give you rest.","Mt 11,28","Mt 11:28"],
["Yo estoy con vosotros todos los días, hasta el fin del mundo.","I am with you always, until the end of the age.","Mt 28,20","Mt 28:20"],
["El Señor es mi pastor, nada me falta.","The Lord is my shepherd; there is nothing I lack.","Sal 23,1","Ps 23:1"],
["Estad quietos y sabed que yo soy Dios.","Be still and know that I am God.","Sal 46,11","Ps 46:11"],
["Todo lo puedo en aquel que me conforta.","I have the strength for everything through him who empowers me.","Flp 4,13","Phil 4:13"],
["Dios es amor.","God is love.","1 Jn 4,8","1 Jn 4:8"],
["Te basta mi gracia, porque mi fuerza se realiza en la debilidad.","My grace is sufficient for you, for power is made perfect in weakness.","2 Co 12,9","2 Cor 12:9"],
["Yo soy el camino, la verdad y la vida.","I am the way and the truth and the life.","Jn 14,6","Jn 14:6"],
["La paz os dejo, mi paz os doy. No se turbe vuestro corazón.","Peace I leave with you; my peace I give to you. Do not let your hearts be troubled.","Jn 14,27","Jn 14:27"],
["Mirad que estoy a la puerta y llamo.","Behold, I stand at the door and knock.","Ap 3,20","Rev 3:20"],
["Con amor eterno te he amado.","With age-old love I have loved you.","Jr 31,3","Jer 31:3"],
["Te he llamado por tu nombre; tú eres mío.","I have called you by name: you are mine.","Is 43,1","Isa 43:1"],
["Buscad primero el Reino de Dios y su justicia, y todo lo demás se os dará por añadidura.","Seek first the kingdom of God and his righteousness, and all these things will be given you besides.","Mt 6,33","Mt 6:33"],
["Bienaventurados los limpios de corazón, porque ellos verán a Dios.","Blessed are the clean of heart, for they will see God.","Mt 5,8","Mt 5:8"],
["Pedid y se os dará; buscad y hallaréis; llamad y se os abrirá.","Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.","Mt 7,7","Mt 7:7"],
["Rema mar adentro.","Put out into deep water.","Lc 5,4","Lk 5:4"],
["Hágase en mí según tu palabra.","May it be done to me according to your word.","Lc 1,38","Lk 1:38"],
["Hoy ha llegado la salvación a esta casa.","Today salvation has come to this house.","Lc 19,9","Lk 19:9"],
["Yo soy la luz del mundo; el que me sigue no camina en tinieblas.","I am the light of the world. Whoever follows me will not walk in darkness.","Jn 8,12","Jn 8:12"],
["Permaneced en mi amor.","Remain in my love.","Jn 15,9","Jn 15:9"],
["Ya no vivo yo, es Cristo quien vive en mí.","I live, no longer I, but Christ lives in me.","Gál 2,20","Gal 2:20"],
["Nada podrá separarnos del amor de Dios manifestado en Cristo Jesús.","Nothing will be able to separate us from the love of God in Christ Jesus.","Rm 8,39","Rom 8:39"],
["Sabemos que todo contribuye al bien de los que aman a Dios.","We know that all things work for good for those who love God.","Rm 8,28","Rom 8:28"],
["Encomienda al Señor tu camino, confía en él, y él actuará.","Commit your way to the Lord; trust in him and he will act.","Sal 37,5","Ps 37:5"],
["Gustad y ved qué bueno es el Señor.","Taste and see that the Lord is good.","Sal 34,9","Ps 34:9"],
["Mi alma descansa solo en Dios.","My soul rests in God alone.","Sal 62,2","Ps 62:2"],
["Crea en mí, oh Dios, un corazón puro.","A clean heart create for me, God.","Sal 51,12","Ps 51:12"],
["Los que esperan en el Señor renuevan sus fuerzas.","They that hope in the Lord will renew their strength.","Is 40,31","Isa 40:31"],
["Sé fiel hasta la muerte y te daré la corona de la vida.","Remain faithful until death, and I will give you the crown of life.","Ap 2,10","Rev 2:10"],
["Habla, Señor, que tu siervo escucha.","Speak, Lord, for your servant is listening.","1 Sm 3,9","1 Sam 3:9"],
["Estad siempre alegres en el Señor; os lo repito, estad alegres.","Rejoice in the Lord always. I shall say it again: rejoice!","Flp 4,4","Phil 4:4"],
["El amor es paciente, es servicial; el amor no tiene envidia.","Love is patient, love is kind. It is not jealous.","1 Co 13,4","1 Cor 13:4"],
["Tus pecados te son perdonados; vete en paz.","Your sins are forgiven; go in peace.","Lc 7,48.50","Lk 7:48.50"],
["Tanto amó Dios al mundo que entregó a su Hijo único.","God so loved the world that he gave his only Son.","Jn 3,16","Jn 3:16"],
["Señor, ¿a quién iremos? Tú tienes palabras de vida eterna.","Master, to whom shall we go? You have the words of eternal life.","Jn 6,68","Jn 6:68"],
["Echad sobre él todas vuestras preocupaciones, porque él cuida de vosotros.","Cast all your worries upon him because he cares for you.","1 Pe 5,7","1 Pet 5:7"],
["Ven, Espíritu Santo, llena los corazones de tus fieles.","Come, Holy Spirit, fill the hearts of your faithful.","Secuencia de Pentecostés","Pentecost Sequence"],
["El Señor es mi luz y mi salvación, ¿a quién temeré?","The Lord is my light and my salvation; whom should I fear?","Sal 27,1","Ps 27:1"],
["Aunque camine por cañadas oscuras, nada temo, porque tú vas conmigo.","Even though I walk in the dark valley I fear no evil; for you are at my side.","Sal 23,4","Ps 23:4"],
["Mi alma tiene sed de Dios, del Dios vivo.","My soul thirsts for God, the living God.","Sal 42,3","Ps 42:3"],
["El Señor está cerca de los atribulados, salva a los abatidos.","The Lord is close to the brokenhearted, saves those whose spirit is crushed.","Sal 34,19","Ps 34:19"],
["Tu palabra es lámpara para mis pasos, luz en mi sendero.","Your word is a lamp for my feet, a light for my path.","Sal 119,105","Ps 119:105"],
["Él sana los corazones destrozados, venda sus heridas.","He heals the brokenhearted, binds up their wounds.","Sal 147,3","Ps 147:3"],
["Señor, tú me sondeas y me conoces.","Lord, you have probed me, you know me.","Sal 139,1","Ps 139:1"],
["Te doy gracias porque me has hecho tan maravillosamente.","I praise you, because I am wonderfully made.","Sal 139,14","Ps 139:14"],
["Dios es nuestro refugio y nuestra fuerza, poderoso defensor en el peligro.","God is our refuge and our strength, an ever-present help in distress.","Sal 46,2","Ps 46:2"],
["Bendice, alma mía, al Señor, y no olvides sus beneficios.","Bless the Lord, my soul; and do not forget all his gifts.","Sal 103,2","Ps 103:2"],
["El Señor es compasivo y misericordioso, lento a la ira y rico en clemencia.","Merciful and gracious is the Lord, slow to anger, abounding in mercy.","Sal 103,8","Ps 103:8"],
["Este es el día que hizo el Señor: sea nuestra alegría y nuestro gozo.","This is the day the Lord has made; let us rejoice in it and be glad.","Sal 118,24","Ps 118:24"],
["Confía en el Señor de todo corazón y no te apoyes en tu prudencia.","Trust in the Lord with all your heart, on your own intelligence do not rely.","Prov 3,5","Prov 3:5"],
["Aunque los montes cambien de lugar, mi amor no se apartará de ti.","Though the mountains leave their place, my love shall never leave you.","Is 54,10","Isa 54:10"],
["¿Puede una madre olvidarse de su criatura? Pues aunque ella se olvide, yo no te olvidaré.","Can a mother forget her infant? Even should she forget, I will never forget you.","Is 49,15","Isa 49:15"],
["Yo conozco mis designios sobre vosotros: designios de paz y no de aflicción.","I know well the plans I have in mind for you: plans for your welfare and not for woe.","Jr 29,11","Jer 29:11"],
["Os daré un corazón nuevo y os infundiré un espíritu nuevo.","I will give you a new heart, and a new spirit I will put within you.","Ez 36,26","Ezek 36:26"],
["El Señor, tu Dios, está en medio de ti; se goza en ti con alegría.","The Lord, your God, is in your midst; he will rejoice over you with gladness.","Sof 3,17","Zeph 3:17"],
["Sé fuerte y valiente. No tengas miedo, porque el Señor tu Dios está contigo.","Be strong and steadfast! Do not fear, for the Lord, your God, is with you.","Jos 1,9","Josh 1:9"],
["El amor del Señor no se ha acabado: se renueva cada mañana.","The Lord's acts of mercy are not exhausted; they are renewed each morning.","Lam 3,22-23","Lam 3:22-23"],
["Bienaventurados los pobres en el espíritu, porque de ellos es el Reino de los cielos.","Blessed are the poor in spirit, for theirs is the kingdom of heaven.","Mt 5,3","Mt 5:3"],
["Bienaventurados los que lloran, porque ellos serán consolados.","Blessed are they who mourn, for they will be comforted.","Mt 5,4","Mt 5:4"],
["Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia.","Blessed are the merciful, for they will be shown mercy.","Mt 5,7","Mt 5:7"],
["Vosotros sois la luz del mundo.","You are the light of the world.","Mt 5,14","Mt 5:14"],
["No andéis preocupados por el mañana.","Do not worry about tomorrow.","Mt 6,34","Mt 6:34"],
["Tomad mi yugo sobre vosotros y aprended de mí, que soy manso y humilde de corazón.","Take my yoke upon you and learn from me, for I am meek and humble of heart.","Mt 11,29","Mt 11:29"],
["¡Ánimo, soy yo, no tengáis miedo!","Take courage, it is I; do not be afraid.","Mt 14,27","Mt 14:27"],
["Donde dos o tres están reunidos en mi nombre, allí estoy yo en medio de ellos.","Where two or three are gathered together in my name, there am I in the midst of them.","Mt 18,20","Mt 18:20"],
["Amarás al Señor tu Dios con todo tu corazón, con toda tu alma y con toda tu mente.","You shall love the Lord, your God, with all your heart, with all your soul, and with all your mind.","Mt 22,37","Mt 22:37"],
["Lo que hicisteis con uno de estos mis hermanos más pequeños, conmigo lo hicisteis.","Whatever you did for one of these least brothers of mine, you did for me.","Mt 25,40","Mt 25:40"],
["Velad y orad para no caer en tentación.","Watch and pray that you may not undergo the test.","Mt 26,41","Mt 26:41"],
["No temas, basta que tengas fe.","Do not be afraid; just have faith.","Mc 5,36","Mk 5:36"],
["Todo es posible para el que cree.","Everything is possible to one who has faith.","Mc 9,23","Mk 9:23"],
["Creo, Señor; ayuda mi falta de fe.","I do believe, help my unbelief!","Mc 9,24","Mk 9:24"],
["Venid vosotros solos a un lugar desierto a descansar un poco.","Come away by yourselves to a deserted place and rest a while.","Mc 6,31","Mk 6:31"],
["Para Dios nada hay imposible.","Nothing will be impossible for God.","Lc 1,37","Lk 1:37"],
["Proclama mi alma la grandeza del Señor, se alegra mi espíritu en Dios, mi salvador.","My soul proclaims the greatness of the Lord; my spirit rejoices in God my savior.","Lc 1,46-47","Lk 1:46-47"],
["María conservaba todas estas cosas, meditándolas en su corazón.","Mary kept all these things, reflecting on them in her heart.","Lc 2,19","Lk 2:19"],
["Sed misericordiosos como vuestro Padre es misericordioso.","Be merciful, just as your Father is merciful.","Lc 6,36","Lk 6:36"],
["Tu fe te ha salvado; vete en paz.","Your faith has saved you; go in peace.","Lc 7,50","Lk 7:50"],
["María ha escogido la mejor parte, y no le será quitada.","Mary has chosen the better part and it will not be taken from her.","Lc 10,42","Lk 10:42"],
["Habrá más alegría en el cielo por un solo pecador que se convierta.","There will be more joy in heaven over one sinner who repents.","Lc 15,7","Lk 15:7"],
["Estando él todavía lejos, su padre lo vio y se conmovió; corrió, se le echó al cuello y lo besó.","While he was still a long way off, his father caught sight of him, and was filled with compassion. He ran to his son, embraced him and kissed him.","Lc 15,20","Lk 15:20"],
["Jesús, acuérdate de mí cuando llegues a tu Reino.","Jesus, remember me when you come into your kingdom.","Lc 23,42","Lk 23:42"],
["Padre, en tus manos encomiendo mi espíritu.","Father, into your hands I commend my spirit.","Lc 23,46","Lk 23:46"],
["¿No ardía nuestro corazón mientras nos hablaba por el camino?","Were not our hearts burning within us while he spoke to us on the way?","Lc 24,32","Lk 24:32"],
["Quédate con nosotros, porque atardece.","Stay with us, for it is nearly evening.","Lc 24,29","Lk 24:29"],
["Yo soy el pan de vida; el que viene a mí no tendrá hambre.","I am the bread of life; whoever comes to me will never hunger.","Jn 6,35","Jn 6:35"],
["El que come mi carne y bebe mi sangre permanece en mí y yo en él.","Whoever eats my flesh and drinks my blood remains in me and I in him.","Jn 6,56","Jn 6:56"],
["Yo he venido para que tengan vida, y vida en abundancia.","I came so that they might have life and have it more abundantly.","Jn 10,10","Jn 10:10"],
["Yo soy el buen pastor; conozco a mis ovejas y las mías me conocen.","I am the good shepherd, and I know mine and mine know me.","Jn 10,14","Jn 10:14"],
["Yo soy la resurrección y la vida.","I am the resurrection and the life.","Jn 11,25","Jn 11:25"],
["Como yo os he amado, amaos también unos a otros.","As I have loved you, so you also should love one another.","Jn 13,34","Jn 13:34"],
["No se turbe vuestro corazón; creed en Dios y creed también en mí.","Do not let your hearts be troubled. You have faith in God; have faith also in me.","Jn 14,1","Jn 14:1"],
["No os dejaré huérfanos; volveré a vosotros.","I will not leave you orphans; I will come to you.","Jn 14,18","Jn 14:18"],
["Yo soy la vid, vosotros los sarmientos; sin mí no podéis hacer nada.","I am the vine, you are the branches. Without me you can do nothing.","Jn 15,5","Jn 15:5"],
["Ya no os llamo siervos, a vosotros os llamo amigos.","I no longer call you slaves. I have called you friends.","Jn 15,15","Jn 15:15"],
["En el mundo tendréis luchas; pero tened valor: yo he vencido al mundo.","In the world you will have trouble, but take courage, I have conquered the world.","Jn 16,33","Jn 16:33"],
["Ahí tienes a tu madre.","Behold, your mother.","Jn 19,27","Jn 19:27"],
["Haced lo que él os diga.","Do whatever he tells you.","Jn 2,5","Jn 2:5"],
["Señor, tú lo sabes todo; tú sabes que te quiero.","Lord, you know everything; you know that I love you.","Jn 21,17","Jn 21:17"],
["Dichosos los que crean sin haber visto.","Blessed are those who have not seen and have believed.","Jn 20,29","Jn 20:29"],
["La esperanza no defrauda, porque el amor de Dios ha sido derramado en nuestros corazones.","Hope does not disappoint, because the love of God has been poured out into our hearts.","Rm 5,5","Rom 5:5"],
["Si Dios está con nosotros, ¿quién estará contra nosotros?","If God is for us, who can be against us?","Rm 8,31","Rom 8:31"],
["El amor todo lo excusa, todo lo cree, todo lo espera, todo lo soporta.","Love bears all things, believes all things, hopes all things, endures all things.","1 Co 13,7","1 Cor 13:7"],
["Si alguno está en Cristo, es una criatura nueva.","Whoever is in Christ is a new creation.","2 Co 5,17","2 Cor 5:17"],
["Dejaos reconciliar con Dios.","Be reconciled to God.","2 Co 5,20","2 Cor 5:20"],
["Nada os preocupe; presentad a Dios vuestras peticiones con oración y acción de gracias.","Have no anxiety at all, but in everything, by prayer and petition, with thanksgiving, make your requests known to God.","Flp 4,6","Phil 4:6"],
["La paz de Dios, que supera todo juicio, custodiará vuestros corazones.","The peace of God that surpasses all understanding will guard your hearts.","Flp 4,7","Phil 4:7"],
["Revestíos de compasión, bondad, humildad, mansedumbre y paciencia.","Put on heartfelt compassion, kindness, humility, gentleness, and patience.","Col 3,12","Col 3:12"],
["Orad sin cesar. Dad gracias en toda ocasión.","Pray without ceasing. In all circumstances give thanks.","1 Ts 5,17-18","1 Thess 5:17-18"],
["Acerquémonos con confianza al trono de la gracia.","Let us confidently approach the throne of grace.","Hb 4,16","Heb 4:16"],
["Jesucristo es el mismo ayer y hoy y siempre.","Jesus Christ is the same yesterday, today, and forever.","Hb 13,8","Heb 13:8"],
["Acercaos a Dios y él se acercará a vosotros.","Draw near to God, and he will draw near to you.","Sant 4,8","Jas 4:8"],
["Si confesamos nuestros pecados, él, que es fiel y justo, nos perdonará.","If we acknowledge our sins, he is faithful and just and will forgive our sins.","1 Jn 1,9","1 Jn 1:9"],
["Mirad qué amor nos ha tenido el Padre para llamarnos hijos de Dios, pues ¡lo somos!","See what love the Father has bestowed on us that we may be called the children of God. Yet so we are.","1 Jn 3,1","1 Jn 3:1"],
["En el amor no hay temor, sino que el amor perfecto expulsa el temor.","There is no fear in love, but perfect love drives out fear.","1 Jn 4,18","1 Jn 4:18"],
["Él enjugará las lágrimas de sus ojos, y ya no habrá muerte, ni llanto, ni dolor.","He will wipe every tear from their eyes, and there shall be no more death or mourning, wailing or pain.","Ap 21,4","Rev 21:4"],
["Mirad que hago nuevas todas las cosas.","Behold, I make all things new.","Ap 21,5","Rev 21:5"]
];
var vb=document.getElementById('palabra');
if(vb){
  var cur=-1, q=vb.querySelector('.pv-q'), rf=vb.querySelector('.pv-r');
  function show(i){cur=i;var v=V[i],l=L();vb.classList.remove('shown');void vb.offsetWidth;q.textContent='«'+(l==='en'?v[1]:v[0])+'»';rf.textContent=l==='en'?v[3]:v[2];vb.classList.add('shown')}
  function pick(){var i;do{i=Math.floor(Math.random()*V.length)}while(i===cur&&V.length>1);show(i)}
  document.getElementById('pv-btn').onclick=pick;
  function wrap(ctx,t,max){var w=t.split(' '),lines=[],ln='';w.forEach(function(x){var tt=ln?ln+' '+x:x;if(ctx.measureText(tt).width>max&&ln){lines.push(ln);ln=x}else ln=tt});if(ln)lines.push(ln);return lines}
  function card(v,l){
    var W=1080,H=1350,c=document.createElement('canvas');c.width=W;c.height=H;var x=c.getContext('2d');
    var acc=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()||'#4f6b45';
    var g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#f4f1ea');g.addColorStop(1,'#ebe6dc');x.fillStyle=g;x.fillRect(0,0,W,H);
    [[160,180,520,acc,.20],[960,300,460,'#e9cf8f',.35],[640,1260,520,'#e7b9c4',.30],[140,1160,380,'#bcd3ea',.30]].forEach(function(b){var r=x.createRadialGradient(b[0],b[1],0,b[0],b[1],b[2]);r.addColorStop(0,b[3]);r.addColorStop(1,'rgba(255,255,255,0)');x.globalAlpha=b[4];x.fillStyle=r;x.fillRect(0,0,W,H)});x.globalAlpha=1;
    x.fillStyle='rgba(255,255,255,.82)';var cx=90,cy=210,cw=W-180,ch=880,rr=56;x.beginPath();x.moveTo(cx+rr,cy);x.arcTo(cx+cw,cy,cx+cw,cy+ch,rr);x.arcTo(cx+cw,cy+ch,cx,cy+ch,rr);x.arcTo(cx,cy+ch,cx,cy,rr);x.arcTo(cx,cy,cx+cw,cy,rr);x.fill();
    x.fillStyle=acc;x.fillRect(W/2-4,110,8,62);x.fillRect(W/2-24,128,48,8);
    x.textAlign='center';x.fillStyle='#6e6760';x.font='600 26px Manrope, sans-serif';
    x.fillText((l==='en'?'A WORD FOR YOU':'UNA PALABRA PARA TI').split('').join(String.fromCharCode(8202)),W/2,cy+100);
    var t='«'+(l==='en'?v[1]:v[0])+'»',fs=86,lines;
    do{x.font='italic '+fs+'px "Instrument Serif", Georgia, serif';lines=wrap(x,t,cw-150);fs-=4}while(lines.length*fs*1.18>560&&fs>40);fs+=4;
    var lh=fs*1.16,y0=cy+ch/2-(lines.length*lh)/2+fs*0.55;x.fillStyle='#1d1b19';
    lines.forEach(function(s,i){x.fillText(s,W/2,y0+i*lh)});
    x.fillStyle=acc;x.font='700 30px Manrope, sans-serif';x.fillText((l==='en'?v[3]:v[2]).toUpperCase(),W/2,cy+ch-90);
    x.fillStyle='#1d1b19';x.font='44px "Instrument Serif", Georgia, serif';x.fillText('P. Sebastián',W/2,H-150);
    x.fillStyle='#6e6760';x.font='500 28px Manrope, sans-serif';x.fillText('el-padrecito.com',W/2,H-100);
    return c;
  }
  document.getElementById('pv-copy').onclick=function(){if(cur<0){pick()}var v=V[cur],l=L(),t='«'+(l==='en'?v[1]:v[0])+'» '+(l==='en'?v[3]:v[2])+'\nhttps://www.el-padrecito.com/orar.html';
    var tt=document.getElementById('pv-toast');tt.textContent=l==='en'?'Preparing image…':'Preparando la imagen…';
    var fl=document.fonts&&document.fonts.load?Promise.all([document.fonts.load('italic 80px "Instrument Serif"'),document.fonts.load('44px "Instrument Serif"'),document.fonts.load('700 30px Manrope')]):Promise.resolve();
    fl.catch(function(){}).then(function(){card(v,l).toBlob(function(b){
      var f=new File([b],'una-palabra-para-ti.png',{type:'image/png'});tt.textContent='';
      if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],text:t}).catch(function(){})}
      else{var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='una-palabra-para-ti.png';document.body.appendChild(a);a.click();a.remove();
        if(navigator.clipboard)navigator.clipboard.writeText(t).catch(function(){});tt.textContent=l==='en'?'Image downloaded':'Imagen descargada'}
    },'image/png')});
  };
  document.addEventListener('langchange',function(){if(cur>=0)show(cur)});
}

/* ---------- Rosario ---------- */
var P={
 cruz:["Por la señal de la Santa Cruz, de nuestros enemigos líbranos, Señor, Dios nuestro. En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.","In the name of the Father, and of the Son, and of the Holy Spirit. Amen."],
 credo:["Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.","I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen."],
 padre:["Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.","Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen."],
 ave:["Dios te salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.","Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."],
 gloria:["Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.","Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen."],
 fatima:["Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu misericordia.","O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of thy mercy."],
 salve:["Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos, y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo. Amén.","Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen."]
};
var N={cruz:["Señal de la cruz","Sign of the Cross"],credo:["Credo","Apostles’ Creed"],padre:["Padre nuestro","Our Father"],ave:["Ave María","Hail Mary"],gloria:["Gloria","Glory Be"],fatima:["Oración de Fátima","Fatima Prayer"],salve:["Salve","Hail, Holy Queen"]};
var M={
 gozosos:{n:["Misterios Gozosos","Joyful Mysteries"],d:["Lunes y sábado","Monday and Saturday"],m:[["La Anunciación del ángel a María","The Annunciation","Lc 1,26-38"],["La Visitación de María a su prima Isabel","The Visitation","Lc 1,39-56"],["El Nacimiento de Jesús en Belén","The Nativity","Lc 2,1-20"],["La Presentación de Jesús en el Templo","The Presentation in the Temple","Lc 2,22-38"],["El Niño Jesús perdido y hallado en el Templo","The Finding in the Temple","Lc 2,41-52"]]},
 luminosos:{n:["Misterios Luminosos","Luminous Mysteries"],d:["Jueves","Thursday"],m:[["El Bautismo de Jesús en el Jordán","The Baptism in the Jordan","Mt 3,13-17"],["Las bodas de Caná","The Wedding at Cana","Jn 2,1-12"],["El anuncio del Reino de Dios","The Proclamation of the Kingdom","Mc 1,14-15"],["La Transfiguración","The Transfiguration","Lc 9,28-36"],["La institución de la Eucaristía","The Institution of the Eucharist","Lc 22,14-20"]]},
 dolorosos:{n:["Misterios Dolorosos","Sorrowful Mysteries"],d:["Martes y viernes","Tuesday and Friday"],m:[["La oración de Jesús en el Huerto","The Agony in the Garden","Lc 22,39-46"],["La flagelación del Señor","The Scourging at the Pillar","Jn 19,1"],["La coronación de espinas","The Crowning with Thorns","Mt 27,27-31"],["Jesús con la cruz a cuestas","The Carrying of the Cross","Lc 23,26-32"],["La crucifixión y muerte de Jesús","The Crucifixion","Lc 23,33-46"]]},
 gloriosos:{n:["Misterios Gloriosos","Glorious Mysteries"],d:["Miércoles y domingo","Wednesday and Sunday"],m:[["La Resurrección del Señor","The Resurrection","Lc 24,1-12"],["La Ascensión del Señor","The Ascension","Hch 1,6-11"],["La venida del Espíritu Santo","The Descent of the Holy Spirit","Hch 2,1-13"],["La Asunción de María","The Assumption","Ap 12,1"],["La Coronación de María","The Coronation of Mary","Ap 12,1"]]}
};
var byDay=['gloriosos','gozosos','dolorosos','gloriosos','luminosos','dolorosos','gozosos'];
var rb=document.getElementById('rosario');
if(rb){
  var set=byDay[new Date().getDay()], steps=[], idx=0;
  function build(){
    steps=[{p:'cruz',b:0},{p:'credo',b:0},{p:'padre',b:1},{p:'ave',b:2},{p:'ave',b:3},{p:'ave',b:4},{p:'gloria',b:-2}];
    var bead=5;
    for(var d=0;d<5;d++){
      steps.push({p:'misterio',d:d,b:bead}); steps.push({p:'padre',b:bead,d:d}); bead++;
      for(var a=0;a<10;a++){steps.push({p:'ave',b:bead,d:d,n:a+1}); bead++}
      steps.push({p:'gloria',b:-2,d:d}); steps.push({p:'fatima',b:-2,d:d});
    }
    steps.push({p:'salve',b:-3});
  }
  /* cuentas: 0 cruz/credo, 1 padre, 2-4 aves, luego 5 décadas (1 padre + 10 aves = 11) */
  var svg=document.getElementById('beads'), circles=[];
  function draw(){
    /* rosario: cruz (b0), cuenta grande (b1), 3 pequeñas (b2-4), medalla (b-2) y anillo de 5 décadas (b5…b59) */
    var cx=200, cy=148, R=122, html='', my=cy+R+10;
    /* anillo: cada década = 1 cuenta grande + 10 pequeñas; hueco en la medalla */
    var w=[];for(var d=0;d<5;d++){w.push(1.9);for(var a=0;a<10;a++)w.push(1)}
    var gap=0.17, span=2*Math.PI-2*gap, tot=0;w.forEach(function(x){tot+=x});tot+=0.6;
    var acc=0.3, ring=[];
    /* empieza a la derecha de la medalla y gira en sentido antihorario visual (hacia arriba por la derecha) */
    w.forEach(function(x){acc+=x/2;var t=Math.PI/2-gap-(acc/tot)*span;ring.push([cx+R*Math.cos(t),cy+R*Math.sin(t)]);acc+=x/2});
    var pd=[[cx,my+86],[cx,my+64],[cx,my+46],[cx,my+28]]; /* b1 grande, b2-4 */
    html+='<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" class="cord"/>';
    html+='<path d="M'+cx+' '+(my+6)+' V'+(my+100)+'" class="cord"/>';
    /* medalla */
    html+='<path data-b="-2" class="bd md" d="M'+cx+' '+(my-12)+' C'+(cx+11)+' '+(my-12)+' '+(cx+12)+' '+(my+2)+' '+cx+' '+(my+12)+' C'+(cx-12)+' '+(my+2)+' '+(cx-11)+' '+(my-12)+' '+cx+' '+(my-12)+' Z"/>';
    /* cruz */
    var ty=my+104;
    html+='<path data-b="0" class="bd xc" d="M'+(cx-3.2)+' '+ty+' h6.4 v11 h10 v6.4 h-10 v26 h-6.4 v-26 h-10 v-6.4 h10 z"/>';
    pd.forEach(function(p,k){var b=k+1,big=b===1;html+='<circle data-b="'+b+'" cx="'+p[0]+'" cy="'+p[1]+'" r="'+(big?7.5:5.2)+'" class="bd'+(big?' big':'')+'"/>'});
    ring.forEach(function(p,k){var b=k+5,big=k%11===0;html+='<circle data-b="'+b+'" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="'+(big?7.5:5.2)+'" class="bd'+(big?' big':'')+'"/>'});
    svg.setAttribute('viewBox','0 0 400 '+(ty+52));
    svg.innerHTML=html; circles=[].slice.call(svg.querySelectorAll('.bd'));
  }
  function render(){
    var s=steps[idx], l=L(), li=l==='en'?1:0, mm=M[set];
    var title, text, sub='';
    if(s.p==='misterio'){var x=mm.m[s.d]; title=(l==='en'?['First','Second','Third','Fourth','Fifth'][s.d]+' mystery':['Primer','Segundo','Tercer','Cuarto','Quinto'][s.d]+' misterio'); text=(l==='en'?x[1]:x[0]); sub=x[2]; }
    else {title=N[s.p][li]+(s.n?' · '+s.n+'/10':''); text=P[s.p][li]; if(s.d!==undefined){var x2=mm.m[s.d]; sub=(l==='en'?x2[1]:x2[0])}}
    document.getElementById('r-title').textContent=title;
    document.getElementById('r-text').textContent=text;
    document.getElementById('r-sub').textContent=sub;
    document.getElementById('r-prog').style.width=((idx+1)/steps.length*100)+'%';
    document.getElementById('r-count').textContent=(idx+1)+' / '+steps.length;
    var active=s.b; if(active===-3) active=-2;
    circles.forEach(function(c){var b=+c.dataset.b; c.classList.toggle('on',b===active); c.classList.toggle('done', stepsBeadDone(b))});
    document.getElementById('r-prev').disabled=idx===0;
    document.getElementById('r-next').textContent= idx===steps.length-1 ? (l==='en'?'Start again':'Volver a empezar') : (l==='en'?'Next →':'Siguiente →');
    var cardT=document.getElementById('r-set'); cardT.textContent=mm.n[li]; document.getElementById('r-day').textContent=mm.d[li];
    [].forEach.call(document.querySelectorAll('.r-sets button'),function(b){b.setAttribute('aria-pressed',b.dataset.set===set)});
  }
  function stepsBeadDone(b){ if(b<0) return false; for(var i=0;i<idx;i++){ if(steps[i].b===b) return true } return false }
  document.getElementById('r-next').onclick=function(){ idx = idx===steps.length-1 ? 0 : idx+1; render() };
  document.getElementById('r-prev').onclick=function(){ if(idx>0){idx--;render()} };
  [].forEach.call(document.querySelectorAll('.r-sets button'),function(b){b.onclick=function(){set=b.dataset.set;idx=0;render()}});
  document.addEventListener('keydown',function(e){ if(!rb.matches(':hover') && document.activeElement && !rb.contains(document.activeElement)) return; if(e.key==='ArrowRight'){document.getElementById('r-next').click()} if(e.key==='ArrowLeft'){document.getElementById('r-prev').click()} });
  document.addEventListener('langchange',render);
  build(); draw(); render();
}

/* ---------- Examen de conciencia ---------- */
var X=[
 ["Amar a Dios sobre todas las cosas","Love God above all things",[["¿He dedicado tiempo a la oración?","Have I set aside time for prayer?"],["¿He puesto mi confianza en cosas, personas o supersticiones antes que en Dios?","Have I placed my trust in things, people or superstitions before God?"],["¿He dudado o negado mi fe, o me ha dado vergüenza mostrarla?","Have I doubted or denied my faith, or been ashamed to show it?"]]],
 ["No tomar el nombre de Dios en vano","Do not take the name of God in vain",[["¿He usado el nombre de Dios con falta de respeto?","Have I used God’s name disrespectfully?"],["¿He jurado en falso o sin necesidad?","Have I sworn falsely or without need?"]]],
 ["Santificar las fiestas","Keep holy the Lord’s Day",[["¿He faltado a Misa el domingo o un día de precepto sin causa grave?","Have I missed Sunday Mass or a holy day without serious reason?"],["¿He dado al domingo un lugar para Dios, la familia y el descanso?","Have I made Sunday a day for God, family and rest?"]]],
 ["Honrar padre y madre","Honor your father and mother",[["¿He sido respetuoso y agradecido con mis padres?","Have I been respectful and grateful to my parents?"],["¿He descuidado a mi familia o a quienes dependen de mí?","Have I neglected my family or those who depend on me?"]]],
 ["No matar","You shall not kill",[["¿He guardado rencor o me he negado a perdonar?","Have I held grudges or refused to forgive?"],["¿He herido a otros con palabras, golpes o desprecio?","Have I hurt others with words, violence or contempt?"],["¿He descuidado mi salud o puesto en riesgo mi vida o la de otros?","Have I neglected my health or endangered my life or others’?"]]],
 ["No cometer actos impuros","You shall not commit adultery",[["¿He sido fiel en mis pensamientos, miradas y acciones?","Have I been faithful in my thoughts, looks and actions?"],["¿He tratado a los demás como objetos y no como personas?","Have I treated others as objects rather than persons?"]]],
 ["No robar","You shall not steal",[["¿He tomado lo que no es mío o no lo he devuelto?","Have I taken what is not mine or failed to return it?"],["¿He sido honesto en mi trabajo y en mis cuentas?","Have I been honest in my work and finances?"],["¿He sido generoso con los pobres?","Have I been generous with the poor?"]]],
 ["No mentir","You shall not bear false witness",[["¿He mentido o exagerado para quedar bien?","Have I lied or exaggerated to look good?"],["¿He hablado mal de otros o he contado sus faltas sin necesidad?","Have I gossiped or revealed others’ faults without need?"]]],
 ["No consentir pensamientos ni deseos impuros","You shall not covet your neighbor’s spouse",[["¿He alimentado pensamientos o contenidos que me alejan de la pureza de corazón?","Have I fed thoughts or content that pull me away from purity of heart?"]]],
 ["No codiciar los bienes ajenos","You shall not covet your neighbor’s goods",[["¿He sentido envidia de lo que tienen los demás?","Have I envied what others have?"],["¿He puesto mi corazón en el dinero o en las cosas?","Have I set my heart on money or possessions?"]]]
];
var xb=document.getElementById('examen-list');
if(xb){
  function drawX(){
    var l=L()==='en'?1:0, n=0, html='';
    X.forEach(function(g,gi){
      html+='<fieldset class="x-g"><legend><span class="x-n">'+(gi<9?'0':'')+(gi+1)+'</span>'+g[l]+'</legend>';
      g[2].forEach(function(qq,qi){var id='x'+gi+'_'+qi; html+='<label class="x-q" for="'+id+'"><input type="checkbox" id="'+id+'"><span>'+qq[l]+'</span></label>'; n++});
      html+='</fieldset>';
    });
    var keep=[].map.call(xb.querySelectorAll('input:checked'),function(i){return i.id});
    xb.innerHTML=html; keep.forEach(function(id){var e=document.getElementById(id); if(e) e.checked=true});
  }
  document.getElementById('x-clear').onclick=function(){[].forEach.call(xb.querySelectorAll('input'),function(i){i.checked=false})};
  document.addEventListener('langchange',drawX);
  drawX();
}
})();
