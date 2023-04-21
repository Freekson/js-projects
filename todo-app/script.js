const form = document.querySelector(".form");
const list = document.querySelector("#list");
const input = document.querySelector("#item");
const clearBtn = document.querySelector("#clear-btn");
let delBtn = [];

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", removeAll);

function addItem(event) {
  event.preventDefault();
  if (input.value === "") {
    alert("Please enter a task.");
    return;
  } else {
    const item = input.value;
    const elem = `<li><p class="paragraf">${item}</p><div class="btns"><button class="edit">Edit</button><button class="del">Delete</button></div></li>`;
    list.innerHTML += elem;
    input.value = "";
    input.focus();
  }

  const delBtns = document.querySelectorAll(".del");
  for (let i = 0; i < delBtns.length; i++) {
    delBtns[i].addEventListener("click", removeItem);
  }
  const editBtns = document.querySelectorAll(".edit");
  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener("click", editItem);
  }
}

function removeAll() {
  list.innerHTML = "";
}

function removeItem(event) {
  const listItem = event.target.parentNode.parentNode;
  listItem.remove();
}

function editItem(event) {
  const listItem = event.target.parentNode.parentNode;
  const taskText = listItem.querySelector(".paragraf");
  const editBtn = listItem.querySelector(".edit");
  const saveBtn = document.createElement("button");

  taskText.contentEditable = true;
  taskText.focus();

  editBtn.disabled = true;
  saveBtn.innerHTML = "Save";
  saveBtn.classList.add("save");

  const btnsDiv = listItem.querySelector(".btns");
  btnsDiv.insertBefore(saveBtn, editBtn);

  saveBtn.addEventListener("click", function () {
    taskText.contentEditable = false;
    editBtn.disabled = false;
    saveBtn.remove();
  });
}
