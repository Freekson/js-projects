"use strict";

var cityName = "warsaw";
var apiKey = "6945f27d046149ba874945788cebf227";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(cityName, "&units=metric");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");
var city = document.querySelector(".city");
var degree = document.querySelector(".temp");
var input = document.querySelector(".input");
var btn = document.querySelector(".search-btn");
var icon = document.querySelector(".weather-icon");
var form = document.querySelector(".search");

function checkWeather() {
  var response, data;
  return regeneratorRuntime.async(function checkWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(cityName, "&units=metric");
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(apiUrl + "&appid=".concat(apiKey)));

        case 3:
          response = _context.sent;

          if (!(response.status == 404)) {
            _context.next = 8;
            break;
          }

          document.querySelector(".error").style.display = "block";
          _context.next = 17;
          break;

        case 8:
          document.querySelector(".error").style.display = "none";
          _context.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          data = _context.sent;
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

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  cityName = input.value;
  checkWeather();
});
checkWeather();