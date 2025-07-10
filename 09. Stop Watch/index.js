let start = document.querySelector('.start')
let pause = document.querySelector('.pause')
let reset = document.querySelector('.reset')
let timer = document.querySelector('.time')
let [mileSec, sec, min, hour] = [0, 0, 0, 0]
let t = null;


start.addEventListener('click', startTimer)
pause.addEventListener('click', pauseTimer)
reset.addEventListener('click', resetTimer)



function startTimer() {
    if (t !== null) {
        clearInterval(t)
    }
    t = setInterval(displayTimer, 10)
}


function pauseTimer() {
    clearInterval(t)
}

function resetTimer() {
    clearInterval(t);
    [mileSec, sec, min, hour] = [0, 0, 0, 0]
    timer.innerHTML = '00 : 00 : 00 : 000'
}


function displayTimer() {
    mileSec += 10
    if (mileSec == 1000) {
        mileSec = 0;
        sec++;

        if (sec == 60) {
            sec = 0
            min++

            if (min == 60) {
                min = 0
                hour++
            }
        }
    }


    let h = hour < 10 ? '0' + hour : hour;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;
    let ms = mileSec < 10 ? '00' + mileSec : mileSec < 100 ? '0' + mileSec : mileSec

    timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`

}