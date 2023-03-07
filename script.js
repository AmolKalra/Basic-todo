// get DOM elements
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// create empty todos array
let todos = [];

// add todo function
function addTodo() {
  const todo = todoInput.value.trim();
  if (todo) {
    // add new todo to array
    todos.push(todo);
    // clear input field
    todoInput.value = "";
    // render todo list
    renderTodos();
  }
}

// update todo function
function updateTodo(index) {
  const todo = prompt("Update todo:", todos[index]);
  if (todo) {
    // update todo in array
    todos[index] = todo.trim();
    // render todo list
    renderTodos();
  }
}

// remove todo function
function removeTodo(index) {
  // remove todo from array
  todos.splice(index, 1);
  // render todo list
  renderTodos();
}

// render todo list function
function renderTodos() {
    // clear todo list
    todoList.innerHTML = "";
    // loop through todos array and create list items
    todos.forEach((todo, index) => {
      // create list item
      const li = document.createElement("li");
      li.textContent = todo;
      // create update button
      const updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      updateButton.className = "update"; // add class name to update button
      updateButton.addEventListener("click", () => updateTodo(index));
      // create remove button
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove"; // add class name to remove button
      removeButton.addEventListener("click", () => removeTodo(index));
      // append buttons to list item
      li.appendChild(updateButton);
      li.appendChild(removeButton);
      // add list item to todo list
      todoList.appendChild(li);
    });
  }

// add event listener to add button
addButton.addEventListener("click", addTodo);

// call renderTodos function to initially render todo list
renderTodos();
