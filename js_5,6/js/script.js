// /**
//  * Created by User on 28.06.2017.
//  */
// function start_time() {
//
//     clearInterval(start_time_interval);
//     start_time_interval = setInterval(function(){
//         var new_date = new Date() - this_date;
//         var sec   = Math.abs(Math.floor(new_date/1000)%60); //sek
//         var min   = Math.abs(Math.floor(new_date/1000/60)%60); //min
//         var hours = Math.abs(Math.floor(new_date/1000/60/60)%24); //hours
//         if (sec.toString().length   == 1) sec   = '0' + sec;
//         if (min.toString().length   == 1) min   = '0' + min;
//         if (hours.toString().length == 1) hours = '0' + hours;
//         $('.timer').text(hours + ':' + min + ':' + sec);
//     },100);
//
// };
var a = 0;
var b = 0;
var c = 0;
var d = 0;

var stopWatch = document.getElementById("stopWatch");
stopWatch.setAttribute('value', '00:00:00:00');
var startButton = document.getElementById("startButton");


function clearTimer() {
    clearInterval(startTimeInterval);
    if (a.toString().length == 1) a = '0' + a;
    if (b.toString().length == 1) b = '0' + b;
    if (c.toString().length == 1) c = '0' + c;
    if (d.toString().length == 1) d = '0' + d;
    stopWatch.setAttribute('value', d + ':' + c + ':' + b + ':' + a);
};

function start_time() {

    var this_date = new Date();

    startTimeInterval = setInterval(function () {
        var new_date = new Date() - this_date;
        var msec = Math.abs(Math.floor(new_date) % 1000); //msek
        var sec = Math.abs(Math.floor(new_date / 1000) % 60); //sek
        var min = Math.abs(Math.floor(new_date / 1000 / 60) % 60); //min
        var hours = Math.abs(Math.floor(new_date / 1000 / 60 / 60) % 24); //hours

        if (sec.toString().length == 1) sec = '0' + sec;
        if (min.toString().length == 1) min = '0' + min;
        if (hours.toString().length == 1) hours = '0' + hours;

        stopWatch.setAttribute('value', hours + ':' + min + ':' + sec + ':' + msec);

    }, 10);
}

// function stopTime() {
//     clearInterval(startTimeInterval);
// }
