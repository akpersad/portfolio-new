"use strict";!function(){var e,t=document.querySelector("#lightSwitch"),a=document.querySelector(".js-main-header");if(window.CSS&&CSS.supports("color","var(--fake-var)")){t&&(e=null!==localStorage.getItem("lightSwitch")&&"dark"===localStorage.getItem("lightSwitch"),(t.checked=e)?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme"),t.addEventListener("change",function(){t.checked?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("lightSwitch","dark")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("lightSwitch"))}))}else t.parentElement.style.display="none";if(a){var r=a.getElementsByClassName("js-main-header__nav-trigger")[0],o=a.getElementsByClassName("js-main-header__nav")[0];r.addEventListener("click",function(e){e.preventDefault();var t=!Util.hasClass(o,"main-header__nav--is-visible");Util.toggleClass(o,"main-header__nav--is-visible",t),r.setAttribute("aria-expanded",t),t&&o.querySelectorAll("[href], input:not([disabled]), button:not([disabled])")[0].focus()})}}();var scrollToElement=function(e){var t=e.getAttribute("data-scrollTo");document.querySelector("#"+t).scrollIntoView({behavior:"smooth"})};