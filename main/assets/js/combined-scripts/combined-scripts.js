"use strict";var test=function(){console.log("hello world")};test();
"use strict";
"use strict";!function(){var e,t=document.querySelector("#lightSwitch"),a=document.querySelector(".js-main-header");if(window.CSS&&CSS.supports("color","var(--fake-var)")){t&&(e=null!==localStorage.getItem("lightSwitch")&&"dark"===localStorage.getItem("lightSwitch"),(t.checked=e)?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme"),t.addEventListener("change",function(){t.checked?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("lightSwitch","dark")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("lightSwitch"))}))}else t.parentElement.style.display="none";if(a){var i=a.getElementsByClassName("js-main-header__nav-trigger")[0],r=a.getElementsByClassName("js-main-header__nav")[0];i.addEventListener("click",function(e){e.preventDefault();var t=!Util.hasClass(r,"main-header__nav--is-visible");Util.toggleClass(r,"main-header__nav--is-visible",t),i.setAttribute("aria-expanded",t),t&&r.querySelectorAll("[href], input:not([disabled]), button:not([disabled])")[0].focus()})}}();
"use strict";
"use strict";function Util(){}if(Util.hasClass=function(t,e){return t.classList?t.classList.contains(e):!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},Util.addClass=function(t,e){var n=e.split(" ");t.classList?t.classList.add(n[0]):Util.hasClass(t,n[0])||(t.className+=" "+n[0]),1<n.length&&Util.addClass(t,n.slice(1).join(" "))},Util.removeClass=function(t,e){var n=e.split(" ");if(t.classList)t.classList.remove(n[0]);else if(Util.hasClass(t,n[0])){var s=new RegExp("(\\s|^)"+n[0]+"(\\s|$)");t.className=t.className.replace(s," ")}1<n.length&&Util.removeClass(t,n.slice(1).join(" "))},Util.toggleClass=function(t,e,n){n?Util.addClass(t,e):Util.removeClass(t,e)},Util.setAttributes=function(t,e){for(var n in e)t.setAttribute(n,e[n])},Util.getChildrenByClassName=function(t,e){t.children;for(var n=[],s=0;s<t.children.length;s++)Util.hasClass(t.children[s],e)&&n.push(t.children[s]);return n},Util.setHeight=function(l,t,i,o,a){var r=t-l,c=null;i.setAttribute("style","height:"+l+"px;"),window.requestAnimationFrame(function t(e){c||(c=e);var n=e-c,s=parseInt(n/o*r+l);i.setAttribute("style","height:"+s+"px;"),n<o?window.requestAnimationFrame(t):a()})},Util.scrollTo=function(l,i,o){var a=window.scrollY||document.documentElement.scrollTop,r=null;window.requestAnimationFrame(function t(e){r||(r=e);var n=e-r;i<n&&(n=i);var s=Math.easeInOutQuad(n,a,l-a,i);window.scrollTo(0,s),n<i?window.requestAnimationFrame(t):o&&o()})},Util.moveFocus=function(t){t||(t=document.getElementsByTagName("body")[0]),t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus())},Util.getIndexInArray=function(t,e){return Array.prototype.indexOf.call(t,e)},Util.cssSupports=function(t,e){return"CSS"in window?CSS.supports(t,e):t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})in document.body.style},Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),"function"!=typeof window.CustomEvent){var CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n};CustomEvent.prototype=window.Event.prototype,window.CustomEvent=CustomEvent}Math.easeInOutQuad=function(t,e,n,s){return(t/=s/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e};
"use strict";