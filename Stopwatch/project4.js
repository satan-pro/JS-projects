const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for timerstatus

let timerStatus = "stopped";
let timer = null;

// Stop Watch Function

function stopWatch() {
    if(seconds/60 === 1)
    {
        seconds=0;
        minutes++;
    }
    if(minutes/60 === 1)
    {
        minutes=0;
        hours++;
    }
    seconds++;

    if(seconds < 10)
    {
        leadingSeconds = "0" + seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }
    if(minutes < 10)
    {
        leadingMinutes = "0" + minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }
    if(hours < 10)
    {
        leadingHours = "0" + hours.toString();
    }
    else{
        leadingHours = hours;
    }

    document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

startStopBtn.addEventListener('click', function (){
    if(timerStatus === "stopped")
    {
        timer = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="icon" id="pause"><path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" /></svg>';
      
        timerStatus = "started";
    }
    else{
        window.clearInterval(timer);
        document.getElementById('startStopBtn').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"  id="play"><path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" /></svg>';
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function(){
    window.clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00";
});

