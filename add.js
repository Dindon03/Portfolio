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