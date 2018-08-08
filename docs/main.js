let ed = new Audio("songs/ed.mp3");
let drake = new Audio("songs/drake.mp3");
let randomwords = [
  "I'm professional programmer",
  "Noobest programmer you will ever see xD",
  "So Dont Call Me Baby <br> -Ed Sheeran",
  "Kiki Do You Love Me ? <br> -Drake"
];

let randomItem = Math.floor(Math.random() * randomwords.length);
document.getElementById("randomwords").innerHTML = randomwords[randomItem];
function play() {
  if (randomItem ==2) {
    ed.play();
  } else if (randomItem ==3) {
  drake.play();
  }
}

play(); 