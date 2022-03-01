const timer = document.getElementById("stopwatch");

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer (){
    if (stoptime == true){
        stoptime == false;
        timeCycle();
    }
}

function stopTimer(){
    if(stoptime == false){
        stoptime == true;
    }
}

function timeCycle(){
    
}