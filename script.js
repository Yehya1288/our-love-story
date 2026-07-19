/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

},1800);

});

/* =========================
   DAYS COUNTER
========================= */

const startDate = new Date("2025-06-13");

const daysElement = document.getElementById("days");

function updateCounter(){

const today = new Date();

const diff = today - startDate;

const days = Math.floor(diff / (1000*60*60*24));

daysElement.innerHTML = days + " Days ❤️";

}

updateCounter();

/* =========================
   PLAY MUSIC
========================= */

const music=document.getElementById("song");

const playBtn=document.getElementById("playBtn");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

function toggleMusic(){

if(!playing){

music.play();

playBtn.innerHTML="❤️ Music Playing";

musicBtn.innerHTML="⏸ Pause Music";

playing=true;

}else{

music.pause();

playBtn.innerHTML="❤ Open Our Story ❤";

musicBtn.innerHTML="▶ Play Perfect";

playing=false;

}

}

playBtn.onclick=toggleMusic;

musicBtn.onclick=toggleMusic;

/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*22)+"px";

heart.style.animationDuration=(6+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,300);
/* =========================
   SCROLL ANIMATION
========================= */

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

observer.unobserve(entry.target);

}

});

},{
threshold:0.15
});


revealItems.forEach(item=>{
observer.observe(item);
});


/* =========================
   IMAGE FULL SCREEN
========================= */

const images = document.querySelectorAll(".memory-img");

const lightbox = document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML=`
<img>
<span>✕</span>
`;

document.body.appendChild(lightbox);


const lightImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector("span");


images.forEach(img=>{

img.addEventListener("click",()=>{

lightImg.src=img.src;

lightbox.classList.add("show");

});

});


closeBtn.onclick=()=>{

lightbox.classList.remove("show");

};


lightbox.onclick=(e)=>{

if(e.target===lightbox)
lightbox.classList.remove("show");

};


/* =========================
   ROSE PETALS
========================= */


function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=
(15+Math.random()*20)+"px";


petal.style.animationDuration=
(8+Math.random()*8)+"s";


document.body.appendChild(petal);


setTimeout(()=>{

petal.remove();

},16000);

}


setInterval(createPetal,700);



/* =========================
   SPARKLES EFFECT
========================= */


document.addEventListener("mousemove",(e)=>{


const sparkle=document.createElement("span");

sparkle.className="sparkle";


sparkle.style.left=e.pageX+"px";

sparkle.style.top=e.pageY+"px";


document.body.appendChild(sparkle);



setTimeout(()=>{

sparkle.remove();

},800);


});



/* =========================
   MOUSE 3D EFFECT
========================= */


const cards=document.querySelectorAll(".love-card");


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect=card.getBoundingClientRect();


const x=e.clientX-rect.left;

const y=e.clientY-rect.top;



const rotateX=
((y-rect.height/2)/20)*-1;


const rotateY=
(x-rect.width/2)/20;



card.style.transform=
`
perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)
`;



});



card.addEventListener("mouseleave",()=>{


card.style.transform=
"perspective(800px) rotateX(0) rotateY(0) scale(1)";


});


});



/* =========================
 PERFORMANCE OPTIMIZATION
========================= */


let ticking=false;


window.addEventListener("scroll",()=>{


if(!ticking){

requestAnimationFrame(()=>{


document.body.style.setProperty(
"--scroll",
window.scrollY
);


ticking=false;


});


ticking=true;

}


});
/* =========================
   WEDDING COUNTDOWN
========================= */


const weddingDate = new Date("2027-07-14 18:00:00");


const countdownElement =
document.getElementById("countdown");



function updateWeddingCountdown(){


const now = new Date();


const difference =
weddingDate - now;



if(difference <= 0){


countdownElement.innerHTML =

`
<h2>
❤️ اليوم المنتظر وصل ❤️
</h2>
`;

return;

}



const days = Math.floor(

difference /
(1000*60*60*24)

);



const hours = Math.floor(

(difference /
(1000*60*60))
%24

);



const minutes = Math.floor(

(difference /
(1000*60))
%60

);



const seconds = Math.floor(

(difference /
1000)
%60

);



countdownElement.innerHTML = `


<div class="time-box">

${days}

<span>
يوم
</span>

</div>



<div class="time-box">

${hours}

<span>
ساعة
</span>

</div>



<div class="time-box">

${minutes}

<span>
دقيقة
</span>

</div>



<div class="time-box">

${seconds}

<span>
ثانية
</span>

</div>


`;

}



setInterval(()=>{


updateWeddingCountdown();



const heart =
document.querySelector(".heart-pulse");


if(heart){


heart.style.animation="none";


setTimeout(()=>{


heart.style.animation=
"heartBeat 1s infinite";


},20);


}



},1000);



updateWeddingCountdown();
