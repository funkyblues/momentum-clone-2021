const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);




// Timeouts// 호출 함수를 넣어주고, 얼마나(ms) 기다릴 것인지를 입력