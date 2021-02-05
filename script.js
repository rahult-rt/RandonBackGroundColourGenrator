var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var RanDomColour = document.getElementById("RanDomColour");

//event to show the colorinput on page load
document.onload = setGradient();

 //function to set the gradient
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	 css.textContent = body.style.background + ";";
}



RanDomColour.addEventListener('click', function (){

	var RandColour = Math.floor(Math.random()*16777215).toString(16);
	var RandColour2 = Math.floor(Math.random()*16777000).toString(16);

	document.body.style.backgroundColor = "#" + RandColour;
	document.body.style.backgroundColor = "#" + RandColour2;

	color1.value = "#" + RandColour;
	color2.value = "#" + RandColour2;

	setGradient();
	css.textContent = `linear-gradient(to right, ${RandColour}, ${RandColour2});`.toUpperCase();
	
	

	})


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

