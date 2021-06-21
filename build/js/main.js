"use strict";const btnUp=document.querySelector(".btn-up");function magic(){20<window.pageYOffset?btnUp.style.opacity="1":btnUp.style.opacity="0"}btnUp.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})},window.onscroll=magic;
//# sourceMappingURL=main.js.map
