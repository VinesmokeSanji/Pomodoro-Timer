const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")
const setTimeEl  = document.getElementById("setTime")
const customMinutes=document.getElementById("customMinutes")
const customSeconds=document.getElementById("customSeconds")
const pomodoroEl=document.getElementById("pomodoro")
const shortBreakEl=document.getElementById("shortBreak")
const longBreakEl=document.getElementById("longBreak")

let timeLeft=1500 ;
let actualTimeLeft=timeLeft;

// sets custom entered time
function setTimer(){
    let newMinutes=parseInt(customMinutes.value);
    let newSeconds=parseInt(customSeconds.value);

    if(newSeconds>60)
        newSeconds=60;

    timeLeft= (newMinutes*60) + newSeconds;
    actualTimeLeft=timeLeft

    let newFormattedTime=`${newMinutes}:${newSeconds}`
    timerEl.innerHTML=newFormattedTime;
}

let interval;

// makes changes in the display timer
function updateTimer(){
    let minutes=Math.floor(timeLeft/60);
    let seconds = timeLeft%60;
    let formattedTime=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

    timerEl.innerHTML=formattedTime;

}

// starts the clock
function startTimer(){
    interval=setInterval(()=>{
        timeLeft--;
        updateTimer();

        if(timeLeft===0){
            clearInterval(interval);
            alert("Time's Up");
            timeLeft=actualTimeLeft;
            //let newTime= "25" + ":" + "00";
            timerEl.innerHTML=formattedTime;
            
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft=actualTimeLeft;
    updateTimer();

}

function pomodoroOption(){
    timeLeft=1500;
    actualTimeLeft=timeLeft;
    updateTimer();
}

function shortBreakOption(){
    timeLeft=300;
    actualTimeLeft=timeLeft;
    updateTimer();

}

function longBreakOption(){
    timeLeft=900;
    actualTimeLeft=timeLeft;
    updateTimer();
}


startEl.addEventListener("click",startTimer)
stopEl.addEventListener("click",stopTimer)
resetEl.addEventListener("click",resetTimer)
setTimeEl.addEventListener("click",setTimer)
pomodoroEl.addEventListener("click",pomodoroOption)
shortBreakEl.addEventListener("click",shortBreakOption)
longBreakEl.addEventListener("click",longBreakOption)
