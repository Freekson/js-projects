const timeLeft = document.querySelector(".time-left");

const birthday = new Date("09/11/2023");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDown() {
  const today = new Date();
  const timeSpan = birthday - today;
  if (timeSpan <= -day) {
    timeLeft.innerHTML = "Hope you have a nice birthday";
    clearInterval(timerId);
    return;
  } else if (timeSpan <= 0) {
    timeLeft.innerHTML = "Happy birthday";
    clearInterval(timerId);
    return;
  }

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  timeLeft.innerHTML =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds";
}

const timerId = setInterval(countDown, second);
console.log(birthday);
