"use strict";

var form = document.querySelector(".form");
var list = document.querySelector("#list");
var input = document.querySelector("#item");
var clearBtn = document.querySelector("#clear-btn");
var delBtn = [];
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", removeAll);

function addItem(event) {
  event.preventDefault();

  if (input.value === "") {
    alert("Please enter a task.");
    return;
  } else {
    var item = input.value;
    var elem = "<li><p class=\"paragraf\">".concat(item, "</p><div class=\"btns\"><button class=\"edit\">Edit</button><button class=\"del\">Delete</button></div></li>");
    list.innerHTML += elem;
    input.value = "";
    input.focus();
  }

  var delBtns = document.querySelectorAll(".del");

  for (var i = 0; i < delBtns.length; i++) {
    delBtns[i].addEventListener("click", removeItem);
  }

  var editBtns = document.querySelectorAll(".edit");

  for (var _i = 0; _i < editBtns.length; _i++) {
    editBtns[_i].addEventListener("click", editItem);
  }
}

function removeAll() {
  list.innerHTML = "";
}

function removeItem(event) {
  var listItem = event.target.parentNode.parentNode;
  listItem.remove();
}

function editItem(event) {
  var listItem = event.target.parentNode.parentNode;
  var taskText = listItem.querySelector(".paragraf");
  var editBtn = listItem.querySelector(".edit");
  var saveBtn = document.createElement("button");
  taskText.contentEditable = true;
  taskText.focus();
  editBtn.disabled = true;
  saveBtn.innerHTML = "Save";
  saveBtn.classList.add("save");
  var btnsDiv = listItem.querySelector(".btns");
  btnsDiv.insertBefore(saveBtn, editBtn);
  saveBtn.addEventListener("click", function () {
    taskText.contentEditable = false;
    editBtn.disabled = false;
    saveBtn.remove();
  });
}