const loginInput = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-from button");

function handleBtnClick() {
  console.log("hello ", loginInput.value);
}

loginButton.addEventListener("click", handleBtnClick);