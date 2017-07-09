/**
 * Created by User on 09.07.2017.
 */
var time = 0;
var running = 0;
var msec = 0, mins = 0, secs = 0, hours = 0;

var startButton = document.getElementById('startPause');
startButton.addEventListener("click", startPause);
var resetButton = document.getElementById('reset');
resetButton.addEventListener("click", reset);


function startPause() {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById("start").innerHTML = "Pause";
        document.getElementById("startPause").style.backgroundColor = "red";
        document.getElementById("startPause").style.borderColor = "red";
    }
    else {
        running = 0;
        document.getElementById("start").innerHTML = "Resume";
        document.getElementById("startPause").style.backgroundColor = "green";
        document.getElementById("startPause").style.borderColor = "green";
    }
}
function reset() {
    running = 0;
    time = 0;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("output").innerHTML = "0:00:00:00";
    document.getElementById("startPause").style.backgroundColor = "green";
    document.getElementById("startPause").style.borderColor = "green";
}
function increment() {
    if (running == 1) {
        setTimeout(function () {
            time++;
            msec = time % 10;
            secs = Math.floor(time / 10 % 60);
            mins = Math.floor(time / 10 / 60);
            hours = Math.floor(time / 10 / 60 / 60);
            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + msec + "0";
            increment();
        }, 100);
    }
}
