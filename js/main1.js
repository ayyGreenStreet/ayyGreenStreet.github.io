
if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	var LOUYOUMONEY = 8;
	var video = document.getElementsByTagName("video")[0];
	//video.src = "./money"+Math.ceil(Math.random()*LOUYOUMONEY)+".webm";
	//video.volume = 0.1;
	//video.load();
	setInterval(loop, 1000);
}

var x = 0;
var titleText = [ "GE", "GEN", "GENO", "GENOC", "GENOCI", "GENOCID", "GENOCIDE", "GENOCID", "GENOCI", "GENOC", "GENO", "GEN", "GE", "G"];
function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}