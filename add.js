/* CUBE */
const cube = document.querySelector('.cube');

function rotateTo(face) {
  cube.style.transform = `rotateX(${getRotationX(face)}) rotateY(${getRotationY(face)})`;
}

function getRotationX(face) {
  switch (face) {
    case 'front':
      return '0deg';
    case 'back':
      return '180deg';
    case 'left':
    case 'right':
      return '0deg';
    case 'top':
      return '-90deg';
    case 'bottom':
      return '90deg';
  }
}

function getRotationY(face) {
  switch (face) {
    case 'front':
    case 'back':
      return '0deg';
    case 'left':
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
const arrowBtn = document.querySelectorAll(".containerProjet i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

arrowBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
})




var aText = new Array(
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