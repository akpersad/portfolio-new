"use strict";!function(){var e,t=document.getElementById("themeSwitch"),a=document.getElementsByClassName("js-main-header")[0];if(window.CSS&&CSS.supports("color","var(--fake-var)")){t&&(e=null!==localStorage.getItem("themeSwitch")&&"dark"===localStorage.getItem("themeSwitch"),(t.checked=e)?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme"),t.addEventListener("change",function(){t.checked?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("themeSwitch","dark")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("themeSwitch"))}))}else t.parentElement.style.display="none";if(a){var n=a.getElementsByClassName("js-main-header__nav-trigger")[0],i=a.getElementsByClassName("js-main-header__nav")[0];n.addEventListener("click",function(e){e.preventDefault();var t=!Util.hasClass(i,"main-header__nav--is-visible");Util.toggleClass(i,"main-header__nav--is-visible",t),n.setAttribute("aria-expanded",t),t&&i.querySelectorAll("[href], input:not([disabled]), button:not([disabled])")[0].focus()})}}();