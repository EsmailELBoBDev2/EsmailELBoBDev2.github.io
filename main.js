let randomwords = [
    "I'm professional programmer",
    "Noobest programmer you will ever see xD",
    "So Dont Call Me Baby, Unless You Mean It! <br> -Ed Sheeran",
    "We don't wanna change, <br> we just want to change everything <br> -Imagine Dragons"
    ];
  let randomItem = Math.floor(Math.random() * randomwords.length);
  document.getElementById("randomwords").innerHTML = randomwords[randomItem];

if (randomItem == 2) {
    edSheeran = new Audio("songs/edSheeran.mp3");
    edSheeran.play();
} else if (randomItem == 3) {
    imagineDragons = new Audio("songs/imaginedragons.mp3")
    imagineDragons.play();
}
