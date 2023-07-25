let time = document.querySelector(".time");

let [hours, minutes, seconds] = [0, 0, 0];

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? ("0" + hours) : hours;
    let m = minutes < 10 ? ("0" + minutes) : minutes;
    let s = seconds < 10 ? ("0" + seconds) : seconds;

    time.innerHTML = h + " : " + m + " : " + s;
}
timer = setInterval(stopWatch,1000);
