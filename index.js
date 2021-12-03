var container = document.getElementById('container');
var layerZero = document.getElementById('layerZero');
var layerOne = document.getElementById('layerOne');
var layerTwo = document.getElementById('layerTwo');
var layerThree = document.getElementById('layerThree');
var layerFour = document.getElementById('layerFour');
var layerFour = document.getElementById('layerFive');
var layerFour = document.getElementById('layerSix');

var mouseX = 0;
var mouseY = 0;

var centerScreen = (1800 / 2) - (1800 / 2) ;

window.addEventListener("mousemove", onMouseMove);

function onMouseMove(event) {
    console.log(event.pageX);
    mouseX = event.pageX - container.offsetLeft;
    mouseY = event.pageY ;

    // onion.style.left = mouseX -25 + "px" ;
    // onion.style.top = mouseY -25 + "px" ;

    layerZero.style.left = (-mouseX * 0.08) + centerScreen + "px";
    layerOne.style.left = (-mouseX * 0.08) + centerScreen + "px";
    layerTwo.style.left = (-mouseX * 0.06) + centerScreen + "px";
    layerThree.style.left = (-mouseX * 0.04) + centerScreen + "px";
    layerFour.style.left = (-mouseX * 0.03) + centerScreen + "px";
    layerFive.style.left = (-mouseX * 0.02) + centerScreen + "px";
    layerSix.style.left = (-mouseX * 0.01) + centerScreen + "px";
}