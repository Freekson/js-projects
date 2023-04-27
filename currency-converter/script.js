const selectTo = document.querySelector("#to");
const fromValue = document.querySelector("#amount");
const toValue = document.querySelector("#converted-amount");
const convernBtn = document.querySelector("#convert");
const curse = document.querySelector("#curse");
const warning = document.querySelector(".warningn");

getCurrencies();
renderList();

async function getCurrencies() {
  const url =
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function renderList() {
  const data = await getCurrencies();
  let i = 0;
  while (i < data.length) {
    const obj = data[i];
    selectTo.innerHTML += `<option value="${obj.cc}">${obj.txt}</option>`;
    i++;
  }
}

async function convert(selectValue) {
  const data = await getCurrencies();
  curse.innerText = data.find((item) => item.cc === selectValue).rate;
  toValue.value =
    fromValue.value * data.find((item) => item.cc === selectValue).rate;
}

convernBtn.onclick = () => {
  const selectValue = selectTo.value;
  if (fromValue.value <= 0) {
    warning.classList.remove("none");
  } else if (fromValue.value > 0) {
    warning.classList.add("none");
    convert(selectValue);
  }
};
