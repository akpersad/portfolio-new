"use strict";var newUtil=new Util,hoverEvent=function(e){for(var l=e.classList[0],r=e.id,s=document.querySelectorAll("."+l),a=0;a<s.length;a++){var t=s[a];t.id!==r?newUtil.swapClasses(t,"smaller-size","larger-size"):newUtil.swapClasses(t,"larger-size","smaller-size")}},removeHoverEvent=function(){for(var e=document.querySelectorAll(".parallelogram"),l=0;l<e.length;l++){var r=e[l];newUtil.removeClass(r,"larger-size smaller-size")}};