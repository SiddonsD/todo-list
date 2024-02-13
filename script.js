let todoTasks = ["Walk Chilli", "make Dinner"];
// let todoTasksStatus = [false, true];

/** 1. Mark items as important and 4. Categorise items by colour combined as bullet journal status*/
// array for bullet journal status
let todoTasksStatus = ["!", ">", "<", "*", "x"];



/** 2. Add field for due date */
const todoList = document.getElementById("todo-list");

updateTodoList();

function addTask() {
    const newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }
}

function updateTodoList() {
    todoList.innerText = "";
    for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
    }
}

function createNewTodoItemElement(task, index) {
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;
    
    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    newTodoTaskElement.appendChild(completeButtonElement);

    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };

    return todoList.appendChild(newTodoTaskElement)
}

function toggleComplete(index) {
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    updateTodoList();
}


/** mark items as important and catgeorise by colour */
// add drop down function to list item in todoList
// delete toggleComplete function
// remove complete button
// add event listener to createNewTodoItemElement for symbol/colour coding
// event listener to task update

// add due date to items

// add reorder list arrows 

