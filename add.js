/* CUBE */
const cube = document.querySelector('.cube');

function rotateTo(face) {
  cube.style.transform = `rotateX(${getRotationX(face)}) rotateY(${getRotationY(face)})`;
}

function getRotationX(face) {
  switch (face) {
    case 'front':
      containerPre.classList.remove("inactive");
      containerprop.classList.add("inactive");
      containercomp.classList.remove("inactive");
      containerProjet.classList.remove("inactive");
      containercont.classList.remove("inactive");
      containerFor.classList.remove("inactive");
      return '-0deg';
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
      return '0deg'
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

let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});



/* Photo 3D */

const photo = document.querySelectorAll(".card-photo")

photo.forEach(el => {
  el.addEventListener("mousemove", e => {

    let elRect = el.getBoundingClientRect()

    let x = e.clientX - elRect.x
    let y = e.clientY - elRect.y

    let midCardWidth = elRect.width / 2
    let midCardHeight = elRect.height / 2

    let angleY = -(x - midCardWidth) / 4
    let angleX = (y - midCardHeight) / 4

    el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  })

  el.addEventListener("mouseleave", () => {
    el.children[0].style.transform = "rotateX(0) rotateY(0)"
  })

})




let cubeRotationX = 0;
let cubeRotationY = 0;

const sensitivity = 0.5;

function rotateCube(e) {

  const deltaX = e.movementX * sensitivity;
  const deltaY = e.movementY * sensitivity;


  cubeRotationY += deltaX;
  cubeRotationX -= deltaY;


  let cube = document.getElementsByClassName("cube");
  for (let i = 0; i < cube.length; i++) {
    cube[i].style.transform = `rotateX(${cubeRotationX}deg) rotateY(${cubeRotationY}deg)`;
  }
}

document.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", rotateCube);
  document.body.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", rotateCube);
});


/* EXPLOSE CUBE */

const boom = document.querySelector(".inner-cube")

function exploseTo() {
  boom.style.transform = `translateX(${getTranslateX(face)}) translateY(${getTranslateY(face)}) translateZ(${getTranslateZ(face)})`;
}
function getTranslateX(face) {
  switch (face) {
    case 'innerfront':
      return '0px';
    case 'innerback':
      return '0px';
    case 'innerleft':
      return '-100px';
    case 'innerright':
      return '100px';
    case 'innertop':
      return '0px';
    case 'innerbottom':
      return '0px';
  }
}

function getTranslateY(face) {
  switch (face) {
    case 'innerfront':
      return '0px';
    case 'innerback':
      return '0px';
    case 'innerleft':
      return '0px';
    case 'innerright':
      return '0px';
    case 'innertop':
      return '100px';
    case 'innerbottom':
      return '100px';
  }
}

function getTranslateZ(face) {
  switch (face) {
    case 'innerfront':
      return '100px';
    case 'innerback':
      return '100px';
    case 'innerleft':
      return '-0px';
    case 'innerright':
      return '0px';
    case 'innertop':
      return '0px';
    case 'innerbottom':
      return '0px';
  }
}

