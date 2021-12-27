const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const todoLine = event.target.parentElement;
  todoLine.remove();
}

/*JavaScript로 HTML 만든거임!!  */
function paintToDo(newTodo) {
  const todoLine = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", deleteToDo);

  todoLine.appendChild(span);
  todoLine.appendChild(button);
  toDoList.appendChild(todoLine);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);