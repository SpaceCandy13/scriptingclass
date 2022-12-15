// JavaScript Document

var bottle = {shape:"" , color:"" , shapeTop:"" , tag:"" , part:"" , core:""};

var pName = document.getElementById('pNameInput').value;
	console.log(pName);

function setColor(round){
	bottle.color=round;
	console.log(bottle.color);
	potionMaker();
}

function setTag(round){
	bottle.tag=round;
	console.log(bottle.tag);
	potionMaker();
}

function setCore(round){
	bottle.core=round;
	console.log(bottle.core);
	potionMaker();
}


function setPart(round){
	bottle.part=round;
	console.log(bottle.part);
	potionMaker();
}

function setPic(round){
	bottle.pic=round;
	console.log(bottle.pic);
	potionMaker();
}

function potionMaker(){
	

	if(bottle.color!=""){
		document.getElementById('color').innerHTML="<img class='img-fluid' src='images/round/round_potions/"+bottle.color+"' alt='color'>";
	}
	
	if(bottle.tag!=""){
		document.getElementById('tag').innerHTML="<img class='img-fluid' src='images/round/round_tags/"+bottle.tag+"' alt='tag'>";
	}

	if(bottle.core!=""){
		document.getElementById('core').innerHTML="<img class='img-fluid' src='images/cores/"+bottle.core+"' alt='core'>";
	}
	
	if(bottle.part!=""){
		document.getElementById('part').innerHTML="<img class='img-fluid' src='images/particle_effects/"+bottle.part+"' alt='part'>";
	}
	
	if(bottle.pic!=""){
		document.getElementById('pic').innerHTML="<img class='img-fluid' src='images/backgrounds_pics/"+bottle.pic+"' alt='pic'>";
	}
}

function printName(){
	document.getElementById('pName').innerHTML += "<p>"+pNameInput+"</p>";
}
