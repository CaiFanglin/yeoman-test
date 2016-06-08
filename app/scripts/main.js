'use strict';

function getObj(id){
	return typeof id === 'string'?document.getElementById(id):id;
}

var doc = window.document;

function addEventHandler(ele, event, handler){
	if(doc.addEventListener){
		ele.addEventListener(event, handler, false);
	}else if(doc.attachEvent){
		ele.attachEvent('on'+event, handler);
	}else{
		ele['on'+event] = handler;
	}
}

function changeColor(){

	var self = this;
	var parent = self.parentNode; 
	for(var i = 0, j = parent.children.length ; i < j ; i++){
		parent.children[i].style["color"] = '#000';
		parent.children[i].style["transform"] = 'scale(0.8)';
	}

	self.style["color"] = 'red';
	self.style["transform"] = 'scale(1.0)';
}

init();

function init(){
	var prag = getObj('prag');
	for(var i=0 , j=prag.children.length ; i<j; i++){
		(function(m){
			addEventHandler(prag.children[m], 'click', changeColor);
		})(i);
	}
}


