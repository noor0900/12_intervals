const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const time = document.querySelector(".time h1");
const round = document.querySelector(".round1");

let sec = 0;
let min = 0;
let hrs = 0;

let myinterval;
start.addEventListener("click", () => {

    pause.style.display = "inline-block";
    start.style.display = "none";

    myinterval = setInterval(() => {
        sec++;

        if (sec < 10) {
        sec = `0${sec}`;

        }

        if (sec > 60) {
            sec = 0
            min++

            if (min < 10) {
                min = `0${min}`;
        
                }
        }

    if (min > 60) {
        min = 0
        hrs++

        if (hrs < 10) {
            hrs = `0${hrs}`;
    
            }
    }

        time.innerHTML = `${hrs}:${min}:${sec}`
    }, 1000)

    round.style.animation = "rotate 1s linear infinite";
});

pause.addEventListener("click", () => {
    clearInterval(myinterval)

    pause.style.display = "none";
    start.style.display = "inline-block";
    round.style.animationPlayState = "paused";
});

reset.addEventListener("click", () => {
    sec = 0;
    min = 0;
    hrs = 0;
    time.innerHTML = "0:0:0";

});




