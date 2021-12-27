const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

/*JavaScript로 HTML 만든거임!!  */
function paintToDo(newTodo) {
  const todoLine = document.createElement("li");
  const span = document.createElement("span");
  todoLine.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(todoLine);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);