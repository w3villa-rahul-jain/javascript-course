function addTask() {
  const task = document.querySelector(".task");
  const input = document.querySelector(".task-input");
  const p = document.createElement("p");
  p.append(input.value);
  p.classList.add("task-list-item");
  task.append(p);
  console.log(input);
  input.value = "";
}

const addClickTask = document.querySelector(".add-task-btn");

addClickTask.addEventListener("click", addTask);

// addTask();

// function taskHandler() {
//   let input = document.querySelector("#input");
//   console.log(input.value);
//   localStorage.setItem("para", input.value);

// }

// function loadHandler() {
//   let div = document.querySelector("#task");
//   let p = document.createElement("p").innerHTML;

//   p = localStorage.getItem("para");

//   div.append(p);
 
// }
