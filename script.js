const playButton = document.querySelector(".play");
const lapButton = document.querySelector(".lap");
const resetButton = document.querySelector(".reset");
const clearButton = document.querySelector(".lap-clear-btn");
const hour = document.querySelector(".hr");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");
const centiSecond = document.querySelector(".msec");
const laps = document.querySelector(".laps");
const bg = document.querySelector(".outer-circle");

let isPlay = false;
let secCounter = 0;
let sec;
let centiSec;
let centiCounter = 0;
let minCounter = 0;
let hrCounter = 0;
let isReset = false;
let lapsItem = 0;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
};

const play = () => {
    if (!isPlay && !isReset) {
        playButton.innerHTML = "Pause";
        bg.classList.add("animation-bg");

        hr = setInterval(() => {
            hour.innerHTML = `${++hrCounter} :`;
        }, 3600000);

        min = setInterval(() => {
            if (minCounter === 60) minCounter = 0;
            minute.innerHTML = `&nbsp;${++minCounter} :`;
        }, 60000);

        sec = setInterval(() => {
            if (secCounter === 60) secCounter = 0;
            second.innerHTML = `&nbsp;${++secCounter} :`;
        }, 1000);

        centiSec = setInterval(() => {
            if (centiCounter === 100) centiCounter = 0;
            centiSecond.innerHTML = `&nbsp;${centiCounter++}`;
        }, 10);

        isPlay = true;
        isReset = true;
    } else {
        playButton.innerHTML = "Play";
        bg.classList.remove("animation-bg");
        clearInterval(hr);
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false;
        isReset = false;
    }
    toggleButton();
};

const reset = () => {
    isReset = true;
    play();
    playButton.innerHTML = 'Play';
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    second.innerHTML = '&nbsp;0 :';
    centiSecond.innerHTML = '&nbsp;0';
    minute.innerHTML = '&nbsp;0 :';
    hour.innerHTML = '0 :';
};

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "laps-item");
    number.setAttribute("class", "num");
    timeStamp.setAttribute("class", "time-stamp");

    number.innerText = `#${++lapsItem}`;
    timeStamp.innerHTML = `${hrCounter} : ${minCounter} : ${secCounter} : ${centiCounter}`;

    li.append(number, timeStamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
};

const clearAll = () => {
    laps.innerHTML = "";
    laps.append(clearButton);
    clearButton.classList.add("hidden");
};

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll);
