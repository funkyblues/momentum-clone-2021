const images = [
  "california_highway.jpg",
  "coast_stars.jpg",
  "Greenwood_lake.jpg",
  "Iceland_plateau.jpg",
  "Jeju_island.jpg",
  "Norway_aurora.jpg",
  "Norway_mountain.jpg",
  "Scotland_aberdeen_coast.jpg",
  "Silent_wharf.jpg",
  "Yoshino_mountain_nara.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`; /**폴더에 있는 img 폴더를 말함!*/

document.body.appendChild(bgImage); //body에 html을 추가하는 method!