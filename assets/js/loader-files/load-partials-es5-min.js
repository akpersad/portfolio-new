"use strict";!function(){for(var e=document.querySelector(".main-container").querySelectorAll("div"),c=document.querySelector(".loading-container"),s=document.querySelector(".main-container"),t=e.length,i=0,d=0,n=0;n<t;n++)e[n].getAttribute("data-load-template")&&(i+=1);for(var r=function(o,e){var a=new XMLHttpRequest;a.open("GET",e,!0),a.onload=function(){if(200<=a.status&&a.status<400){var e=a.responseText;if(o.innerHTML=e,(d+=1)===i){var t="d-none";c.classList.add(t),s.classList.remove(t);var n=document.querySelector("body"),r=document.createElement("script");r.src="assets/js/combined-scripts/combined-scripts.js",n.appendChild(r)}}},a.onerror=function(){},a.send()},o=0;o<t;o++)e[o].getAttribute("data-load-template")&&r(e[o],e[o].getAttribute("data-load-template"))}();