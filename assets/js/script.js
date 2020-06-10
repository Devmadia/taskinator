var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']");
    console.log(taskNameInput);

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler); {
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
};