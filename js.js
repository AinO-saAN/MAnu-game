const Manu = document.querySelector('.Manu');
const boss = document.querySelector('.boss')
const jump = () =>{
    Manu.classList.add('jump');
setTimeout(()=>{

    Manu.classList.remove('jump');

},500)
}
const loop = setInterval(() => {

    const pipPosition = boss.offsetLeft;
    const ManuPosition = window.getComputedStyle(Manu) .bottom.replace('px','');

if(pipPosition <= -90  && pipPosition> -100 && ManuPosition < -109){

    boss.style.animation = 'none';
    boss.style.left ='${pipPosition}px' ;
    Manu.src = 'manu sprite.png';
    
    boss.style.animation = 'n one';
    boss.style.left ='${ManuPosition}px' ;
clearInterval(loop)
}
}, 10);
document.addEventListener('keydown',jump);
       
conslole.log(boss);