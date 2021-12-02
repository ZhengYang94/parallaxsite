//2 type time

var leftPos = 0;
var topPos = 0;

setInterval(moveBox, 1000);

function moveBox() {
    if(leftPos > 900){
        leftPos = -100;
    }
    else{
        leftPos += 5;
    }

    if(topPos > 600) {
        topPos = -100;
    }
    else{
        topPos += 5;
    }
    console.log("Is Moving!");
    
    
    document.getElementById('box1').style.left = leftPos + "px";
    document.getElementById('box2').style.top = topPos + "px";
    // console.log('leftpos', leftPos);
    
}


//Countdown timer

setTimeout (countDown, 5000);

function countDown () {
    console.log("Go!!!");
    
}
