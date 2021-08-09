function init(){

const start=document.getElementById('start');
let paragraph=document.getElementById('flightStatus');
let shuttleBackground=document.getElementById('shuttleBackground');
const restart=document.getElementById("restart");
const up=document.getElementById("up");
const down=document.getElementById("down");
const left=document.getElementById("left");
const right=document.getElementById("right");
const rocket=document.getElementById("rocket");
rocket.style.position='absolute';
rocket.style.bottom="0px";
rocket.style.left="0px";

start.addEventListener('click', function(){
let confirmation=window.confirm('Are you ready to guide Catbro to the finish line using the arrow keys?');
   if (confirmation===true){
       paragraph.innerText="Let's go!";
       shuttleBackground.style.background="blue"
       return true;
   }
   })

restart.addEventListener('click',function(){
    let confirmation=window.confirm('Are you sure you want to start over?');
    if (confirmation===true){
        rocket.style.bottom="0px";
        rocket.style.left="0px";
        return true;
    }
    })
 
up.addEventListener('click',function(){
    let x=10;
    let newPosition=(parseInt(rocket.style.bottom)+x)+'px';
    rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px';
})

down.addEventListener('click',function(){
    let x=10;
    let newPosition=(parseInt(rocket.style.bottom)+x)+'px';
    rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px';
})


left.addEventListener('click',function(){
    let x=10;
    let newPosition=parseInt(rocket.style.left)+x+'px';
    rocket.style.left=parseInt(rocket.style.left) - 10 + 'px'; 
})


right.addEventListener('click',function(){
    let x=10;
    let newPosition=parseInt(rocket.style.left)+x+'px';
    rocket.style.left=parseInt(rocket.style.left) + 10 + 'px'; 
})


}
window.onload =init;
