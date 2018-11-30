let randomwords = [
    "I'm professional programmer",
    "Noobest programmer you will ever see xD",
    "So Dont Call Me Baby, Unless You Mean It! <br> -Ed Sheeran",
    "Smash into everyone, crash into everything <br> -Eminem"
    ];
  let randomItem = Math.floor(Math.random() * randomwords.length);
  document.getElementById("randomwords").innerHTML = randomwords[randomItem];

if (randomItem == 2) {
    ed = new Audio("songs/ed.mp3");
    ed.play();
} else if (randomItem == 3) {
    eminem = new Audio("songs/eminem.mp3")
    eminem.play();
}
