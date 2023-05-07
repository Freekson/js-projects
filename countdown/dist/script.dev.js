"use strict";

var timeLeft = document.querySelector(".time-left");
var birthday = new Date("09/11/2023");
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;

function countDown() {
  var today = new Date();
  var timeSpan = birthday - today;

  if (timeSpan <= -day) {
    timeLeft.innerHTML = "Hope you have a nice birthday";
    clearInterval(timerId);
    return;
  } else if (timeSpan <= 0) {
    timeLeft.innerHTML = "Happy birthday";
    clearInterval(timerId);
    return;
  }

  var days = Math.floor(timeSpan / day);
  var hours = Math.floor(timeSpan % day / hour);
  var minutes = Math.floor(timeSpan % hour / minute);
  var seconds = Math.floor(timeSpan % minute / second);
  timeLeft.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

var timerId = setInterval(countDown, second);
console.log(birthday);