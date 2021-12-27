const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY,  JSON.stringify(toDos));
}

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
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of ", item);
// }

// 아래 화살표 함수(arrow function)으로 표현되었음.
// 화살표 함수와 같은 기능을 하는 함수라 주석!

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}