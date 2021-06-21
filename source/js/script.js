'use strict'

const btnUp = document.querySelector('.btn-up')
//
function magic() {
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
window.onscroll = magic
