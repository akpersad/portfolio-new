"use strict";var sections=document.querySelector(".sections").querySelectorAll("section"),nav=document.querySelector("#sticky-nav_nav"),navHeight=nav.offsetHeight,navTop=nav.offsetTop,stickykNav=function(){window.pageYOffset>=navTop?nav.classList.add("position-fixed"):nav.classList.remove("position-fixed")},isScrolledBottom=function(){return document.documentElement.offsetHeight<=window.innerHeight+(window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0))};window.addEventListener("scroll",function(e){var t=this.pageYOffset,o=sections.length;stickykNav();for(var s=0;s<o;s++){var n=sections[s].offsetTop-navHeight,i=n+sections[s].offsetHeight,c=nav.querySelectorAll("a");if(n<=t&&t<=i){for(var a=0;a<c.length;a++)c[a].classList.remove("active");document.querySelector("a."+sections[s].id).classList.add("active")}else isScrolledBottom()&&(c[o-2].classList.remove("active"),document.querySelector("a."+sections[o-1].id).classList.add("active"))}});