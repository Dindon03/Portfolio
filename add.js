/* CUBE */
const cube = document.querySelector('.cube');

function rotateTo(face) {
  cube.style.transform = `rotateX(${getRotationX(face)}) rotateY(${getRotationY(face)})`;
}

function getRotationX(face) {
  switch (face) {
    case 'front':
      containerPre.classList.remove("inactive");
      containerprop.classList.remove("inactive");
      containercomp.classList.remove("inactive");
      containerProjet.classList.remove("inactive");
      containercont.classList.remove("inactive");
      containerFor.classList.remove("inactive");
      return '0deg';
    case 'back':
      containerPre.classList.add("inactive");
      containerprop.classList.remove("inactive");
      containercomp.classList.remove("inactive");
      containerProjet.classList.remove("inactive");
      containercont.classList.remove("inactive");
      containerFor.classList.remove("inactive");
      return '180deg';
    case 'left':
      
    case 'right':
      containerPre.classList.remove("inactive");
      containerprop.classList.remove("inactive");
      containercomp.classList.add("inactive");
      containerProjet.classList.remove("inactive");
      containercont.classList.remove("inactive");
      containerFor.classList.remove("inactive");
      return '0deg';
    case 'top':
      containerPre.classList.remove("inactive");
      containerprop.classList.remove("inactive");
      containercomp.classList.remove("inactive");
      containerProjet.classList.remove("inactive");
      containercont.classList.remove("inactive");
      containerFor.classList.add("inactive");
      return '-90deg';
    case 'bottom':
      containerPre.classList.remove("inactive");
      containerprop.classList.remove("inactive");
      containercomp.classList.remove("inactive");
      containerProjet.classList.remove("inactive");
      containercont.classList.add("inactive");
      containerFor.classList.remove("inactive");
      return '90deg';
  }
}

function getRotationY(face) {
  switch (face) {
    case 'front':
    case 'back':
      return '0deg';
    case 'left':
      containerPre.classList.remove("inactive");
      containerprop.classList.remove("inactive");
      containercomp.classList.remove("inactive");
      containerProjet.classList.add("inactive");
      containercont.classList.remove("inactive");
      containerFor.classList.remove("inactive");
      return '-90deg';
    case 'right':
      return '90deg';
    case 'top':
    case 'bottom':
      return '0deg';
  }
}

/* Carousel */
const carousel = document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll("#containerProjet i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;



arrowBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
})


/* Menu burger */

/* Sélection des éléments HTML */
let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})








let aText = new Array(
  "There are only 10 types of people in the world:", 
  "Those who understand binary, and those who don't"
  );
  let iSpeed = 100; // time delay of print out
  let iIndex = 0; // start printing array at this posision
  let iArrLength = aText[0].length; // the length of the text array
  let iScrollAt = 20; // start scrolling up at this many lines
   
  let iTextPos = 0; // initialise text position
  let sContents = ''; // initialise contents variable
  let iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   let destination = document.getElementById("Apropos");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();