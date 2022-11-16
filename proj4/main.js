function addTask() {
  const task = document.querySelector(".task");
  const input = document.querySelector(".task-input").value;
  const p = document.createElement("p");
  p.append(input);
  p.classList.add('task-list-item');  
  task.append(p);
  
  console.log(task);
}

const addClickTask = document.querySelector(".add-task-btn");

addClickTask.addEventListener("click", addTask);

// addTask();
