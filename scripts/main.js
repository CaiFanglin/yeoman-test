"use strict";function getObj(n){return"string"==typeof n?document.getElementById(n):n}function addEventHandler(n,e,t){doc.addEventListener?n.addEventListener(e,t,!1):doc.attachEvent?n.attachEvent("on"+e,t):n["on"+e]=t}function changeColor(){for(var n=this,e=n.parentNode,t=0,r=e.children.length;r>t;t++)e.children[t].style.color="#000",e.children[t].style.transform="scale(0.8)";n.style.color="red",n.style.transform="scale(1.0)"}function init(){for(var n=getObj("prag"),e=0,t=n.children.length;t>e;e++)!function(e){addEventHandler(n.children[e],"click",changeColor)}(e)}var doc=window.document;init();