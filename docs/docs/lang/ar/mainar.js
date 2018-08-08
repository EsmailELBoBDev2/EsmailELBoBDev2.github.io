let ed = new Audio("../../songs/ed.mp3");
let drake = new Audio("../../songs/drake.mp3");
let randomwords = [
  "انا مبرمج محترف",
  "أفضل مبمرج هتشوفة فى حياتك هههه",
  "علشان كدا متقوليش يا بيبى <br> -إيد شيران",
  "كيكى انت بتحبينى ؟ <br> -دريك"
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