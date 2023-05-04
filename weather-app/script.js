let cityName = "warsaw";

const apiKey = "6945f27d046149ba874945788cebf227";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;

const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const city = document.querySelector(".city");
const degree = document.querySelector(".temp");
const input = document.querySelector(".input");
const btn = document.querySelector(".search-btn");
const icon = document.querySelector(".weather-icon");
const form = document.querySelector(".search");

async function checkWeather() {
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;
  const response = await fetch(apiUrl + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "none";
    let data = await response.json();

    humidity.innerText = data.main.humidity;
    wind.innerText = data.wind.speed + " km/h";
    degree.innerText = data.main.temp.toFixed(1) + " °C";
    city.innerHTML = data.name;

    if (data.weather[0].main == "Clouds") {
      icon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "./images/mist.png";
    }
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  cityName = input.value;
  checkWeather();
});

checkWeather();
