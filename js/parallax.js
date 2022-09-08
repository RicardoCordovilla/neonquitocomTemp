let parallax=document.querySelector('.parallax')
let imgPar1=document.querySelector('.imgPar1')
let imgPar2=document.querySelector('.imgPar2')
let imgPar3=document.querySelector('.imgPar3')
let imgPar4=document.querySelector('.imgPar4')

function scrollParallax(){
    let scrollTop=document.documentElement.scrollTop;
    parallax.style.transform='translateY('+scrollTop*-0.2+'px)'
    imgPar1.style.transform='translateY('+scrollTop*-0.4+'px)'
    imgPar2.style.transform='translateY('+scrollTop*-0.5+'px)'
    imgPar3.style.transform='translateY('+scrollTop*-0.6+'px)'
    imgPar4.style.transform='translateY('+scrollTop*-0.7+'px)'
}

window.addEventListener('scroll',scrollParallax)