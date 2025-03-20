const addbtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const taskcontainer = document.querySelector("#tasks");
const error = document.querySelector("#error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = () => {
  countValue.innerText = taskCount;
};

const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";

  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }

  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
    <input type="checkbox" class="task-check" />
    <span class="taskname">${taskName}</span>
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
  `;

  taskcontainer.appendChild(task);

  const deleteButton = task.querySelector(".delete");
  deleteButton.onclick = () => {
    task.remove();
    taskCount -= 1;
    displayCount();
  };

  const editButton = task.querySelector(".edit");
  editButton.onclick = () => {
    newTaskInput.value = task.querySelector(".taskname").innerText;
    task.remove();
    taskCount -= 1;
    displayCount();
  };

  const checkBox = task.querySelector(".task-check");
  checkBox.onchange = () => {
    checkBox.nextElementSibling.classList.toggle("completed");
    taskCount += checkBox.checked ? -1 : 1;
    displayCount();
  };

  taskCount += 1;
  displayCount();
  newTaskInput.value = "";
};

addbtn.addEventListener("click", addTask);

window.onload = () => {
  taskCount = 0;
  displayCount();
  newTaskInput.value = "";
};

