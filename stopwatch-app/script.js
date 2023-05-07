const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const milisecondsElement = document.querySelector(".miliseconds");

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let intervalId = 0;

startBtn.onclick = function () {
  startBtn.classList.add("active");
  stopBtn.classList.remove("active");

  if (intervalId === 0) {
    intervalId = setInterval(() => {
      miliseconds++;

      if (miliseconds >= 100) {
        miliseconds = 0;
        seconds++;
      } else if (miliseconds < 10) {
        milisecondsElement.innerText = "0" + miliseconds;
      } else {
        milisecondsElement.innerText = miliseconds;
      }

      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      } else if (seconds < 10) {
        secondsElement.innerText = "0" + seconds;
      } else {
        secondsElement.innerText = seconds;
      }

      if (minutes >= 60) {
        minutes = 0;
      } else if (minutes < 10) {
        minutesElement.innerText = "0" + minutes;
      } else {
        minutesElement.innerText = minutes;
      }
    }, 10);
  }
};

stopBtn.onclick = function () {
  stopBtn.classList.add("active");
  startBtn.classList.remove("active");

  clearInterval(intervalId);
  intervalId = 0;
};

resetBtn.onclick = function () {
  miliseconds = 0;
  seconds = 0;
  minutes = 0;

  startBtn.classList.remove("active");
  stopBtn.classList.remove("active");

  milisecondsElement.innerText = "00";
  secondsElement.innerText = "00";
  minutesElement.innerText = "00";

  clearInterval(intervalId);
  intervalId = 0;
};
