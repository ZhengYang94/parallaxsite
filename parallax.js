var onion = document.getElementById('onion');
var container = document.getElementById('container');
var layerOne = document.getElementById('layerOne');
var layerTwo = document.getElementById('layerTwo');
var layerThree = document.getElementById('layerThree');
var layerFour = document.getElementById('layerFour');

var mouseX = 0;
var mouseY = 0;

var centerScreen = (1000 / 2) - (1200 / 2) ;

window.addEventListener("mousemove", onMouseMove);

function onMouseMove(event) {
    console.log(event.pageX);
    mouseX = event.pageX - container.offsetLeft;
    mouseY = event.pageY ;

    onion.style.left = mouseX -25 + "px" ;
    onion.style.top = mouseY -25 + "px" ;

    layerOne.style.left = (-mouseX * 0.08) + centerScreen + "px";
    layerTwo.style.left = (-mouseX * 0.03) + centerScreen + "px";
    layerThree.style.left = (-mouseX * 0.03) + centerScreen + "px";
    layerFour.style.left = (-mouseX * 0.01) + centerScreen + "px";
}