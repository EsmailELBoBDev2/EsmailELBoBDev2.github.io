// This Function For The Random Array List (Random Words)
let mainJS = function() {
  let randomwords = [
    "I'm professional programmer",
    "Noobest programmer you will ever see xD",
    "So Dont Call Me Baby <br> -Ed Sheeran",
    "Kiki Do You Love Me ? <br> -Drake"
  ];
  let randomItem = Math.floor(Math.random() * randomwords.length);
  document.getElementById("randomwords").innerHTML = randomwords[randomItem];

  //-----------------------------------------------

  /* This Function For The Songs (Witch Will Play When Specific Word Will Appear To User
  From The Random Array List (Random Words) */
  let ed = new Audio("songs/ed.mp3");
  let drake = new Audio("songs/drake.mp3");
  if (randomItem == 2) {
    ed.play();
  } else if (randomItem == 3) {
    drake.play();
  }
}

mainJS();
