"use strict";!function(){var e,t=document.querySelector("#lightSwitch"),a=document.querySelector(".js-main-header");if(window.CSS&&CSS.supports("color","var(--fake-var)")){t&&(e=null!==localStorage.getItem("lightSwitch")&&"dark"===localStorage.getItem("lightSwitch"),(t.checked=e)?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme"),t.addEventListener("change",function(){t.checked?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("lightSwitch","dark")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("lightSwitch"))}))}else t.parentElement.style.display="none";if(a){var i=a.getElementsByClassName("js-main-header__nav-trigger")[0],r=a.getElementsByClassName("js-main-header__nav")[0];i.addEventListener("click",function(e){e.preventDefault();var t=!Util.hasClass(r,"main-header__nav--is-visible");Util.toggleClass(r,"main-header__nav--is-visible",t),i.setAttribute("aria-expanded",t),t&&r.querySelectorAll("[href], input:not([disabled]), button:not([disabled])")[0].focus()})}}();