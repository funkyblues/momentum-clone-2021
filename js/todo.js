const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const todoLine = event.target.parentElement;
  // 클릭한 todo를 제거하는 라인! 클릭한 todo와 id가 같으면 제거한다.
  // toDo는 toDos DB에 있는 요소 중 하나
  toDos = toDos.filter(toDo => toDo.id !== parseInt(todoLine.id));
  saveToDos();
  // li를 제거하면 li의 id를 얻을 수 있음!!!
  todoLine.remove();
}

/*JavaScript로 HTML 만든거임!!  */
/*paintToDo에 받는 내용을 객체로 받게 되어서, 함수도 변경해야해~~~!! */
function paintToDo(newTodo) {
  const todoLine = document.createElement("li");
  todoLine.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

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
  const newTodoObj = {
    text: newTodo,
    id : Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function sexyFilter() {

}

// [1, 2, 3, 4].filter(sexyFilter)


// [1, 2, 4]!
// sexyFilter(1) = 1
// sexyFilter(2) = 2
// sexyFilter(3) X 3
// sexyFilter(4) = 4

// const todos = [{text: "hi"}, {text: "hello"}];
// function sexyFilter(todo) {
//   return todo.text !== "hi";
// }
// todos.filter(sexyFilter);

// 화살표 함수로 이렇게도 쓸 수 있음
// const arr = [1, 2, 3, 4];
// const newArr = arr.filter(item => item > 2);
