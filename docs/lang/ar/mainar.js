// This Function For The Random Array List (Random Words)
let mainJS = function() {
  let randomwords = [
    "انا مبرمج محترف",
    "أفشل مبرمج هتشوفة فى حياتك ههههه",
    "علشان كدا متقوليش يا بيبى <br> -إيد شيران",
    "كيكى انت بتحبينى ؟ <br> -دريك"
  ];
  let randomItem = Math.floor(Math.random() * randomwords.length);
  document.getElementById("randomwords").innerHTML = randomwords[randomItem];

  //-----------------------------------------------

  /* This Function For The Songs (Witch Will Play When Specific Word Will Appear To User
  From The Random Array List (Random Words) */
  let ed = new Audio("../../songs/ed.mp3");
  let drake = new Audio("../../songs/drake.mp3");
  if (randomItem == 2) {
    ed.play();
  } else if (randomItem == 3) {
    drake.play();
  }
}

mainJS();
