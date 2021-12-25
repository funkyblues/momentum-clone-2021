const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); //어떤 event의 기본 행동이든지 발생되지 않도록 막는 것
  // 기본 행동은 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작
  //누군가 form을 submit하면 브라우저는 기본적으로 페이지를 새로고침함!
  // console.log(event);
  console.log(loginInput.value);
  //event라고 쓰는게 관행!
}
loginForm.addEventListener("submit", onLoginSubmit);
// "submit" 이벤트가 발생할 때, JS는 먼저 onLoginSubmit을 호출하고, onLoginSubmit(info)에서 브라우저에서 보내는 정보를 info에 담아서, 함수를 실행해줌.
// 모든 EventListener function의 첫 번째 argument는 항상 지금 막 벌어진 일들에 대한 정보임.