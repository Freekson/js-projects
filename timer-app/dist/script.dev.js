"use strict";

var startBtn = document.querySelector(".start");
var stopBtn = document.querySelector(".stop");
var resetBtn = document.querySelector(".reset");
var minutesElement = document.querySelector(".minutes");
var secondsElement = document.querySelector(".seconds");
var milisecondsElement = document.querySelector(".miliseconds");
var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var intervalId = 0;

startBtn.onclick = function () {
  startBtn.classList.add("active");
  stopBtn.classList.remove("active");

  if (intervalId === 0) {
    intervalId = setInterval(function () {
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