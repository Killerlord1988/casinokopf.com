'use strict'

let btnUp

if (document.querySelector('.btn-up')) {
  btnUp = document.querySelector('.btn-up')
  //
function scollUp() {
  if (window.pageYOffset > 20) {
    btnUp.style.opacity = '1'
  } else { btnUp.style.opacity = '0' }
}
//
btnUp.onclick = function () {
	window.scrollTo ({
    top: 0,
    behavior: 'smooth',
  })
}
// When scrolling, we run the function
window.onscroll = scollUp
}

// burger menu
const burgerBtn = document.querySelector('.header__language button')
const aboutList = document.querySelector('.header__about')
const noJs = document.querySelectorAll('.no-js')

function removeNoJs(arr, cls) {
  arr.forEach(function (n) {
    n.classList.remove(cls);
  });
}

removeNoJs(noJs, 'no-js');

burgerBtn.addEventListener('click', function() {
  aboutList.classList.toggle('header__about--active')
});
