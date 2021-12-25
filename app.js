const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", handleBtnClick);