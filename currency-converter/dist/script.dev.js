"use strict";

var selectTo = document.querySelector("#to");
var fromValue = document.querySelector("#amount");
var toValue = document.querySelector("#converted-amount");
var convernBtn = document.querySelector("#convert");
var curse = document.querySelector("#curse");
var warning = document.querySelector(".warningn");
getCurrencies();
renderList();

function getCurrencies() {
  var url, response, data;
  return regeneratorRuntime.async(function getCurrencies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function renderList() {
  var data, i, obj;
  return regeneratorRuntime.async(function renderList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getCurrencies());

        case 2:
          data = _context2.sent;
          i = 0;

          while (i < data.length) {
            obj = data[i];
            selectTo.innerHTML += "<option value=\"".concat(obj.cc, "\">").concat(obj.txt, "</option>");
            i++;
          }

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function convert(selectValue) {
  var data;
  return regeneratorRuntime.async(function convert$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getCurrencies());

        case 2:
          data = _context3.sent;
          curse.innerText = data.find(function (item) {
            return item.cc === selectValue;
          }).rate;
          toValue.value = fromValue.value * data.find(function (item) {
            return item.cc === selectValue;
          }).rate;

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

convernBtn.onclick = function () {
  var selectValue = selectTo.value;

  if (fromValue.value <= 0) {
    warning.classList.remove("none");
  } else if (fromValue.value > 0) {
    warning.classList.add("none");
    convert(selectValue);
  }
};