// This Function For The Random Array List (Random Words)
let mainJS = function() {
  let randomwords = [
    "I'm professional programmer",
    "Noobest programmer you will ever see xD",
    "So Dont Call Me Baby, Unless You Mean It! <br> -Ed Sheeran",
    "Smash into everyone, crash into everything <br> -Eminem"
  ];
  let randomItem = Math.floor(Math.random() * randomwords.length);
  document.getElementById("randomwords").innerHTML = randomwords[randomItem];

  //-----------------------------------------------

  /* This Function For The Songs (Which Will Play Auto When Specific Word Will Appear To 
  User From The Random Array List (Random Words) */
  let ed = new Audio("songs/ed.mp3");
  let eminem = new Audio("songs/eminem.mp3");
  if (randomItem == 2) {
    ed.play();
  } else if (randomItem == 3) {
    eminem.play();
  }
}
mainJS();
