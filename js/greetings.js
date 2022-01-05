const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginText = document.querySelector("#login-form .login__text");
const greeting = document.querySelector("#greeting");

/*string을 반복해서 사용할 땐, 대문자로 const 정의해 주는 게 오타 예방에 도움이 됨.. */
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const SUBMITTED = "submitted";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault(); 
  loginText.classList.add(SUBMITTED);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Greetings, ${username}!`;
  loginText.classList.add(SUBMITTED);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginText.classList.remove(SUBMITTED);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else {
  paintGreetings(savedUsername);
}