function ranomWords() {

  let randomwords = [
    "Hey, User!",
    "Nothing Here! <br> Close This Website",
    "Don't Look Behind You",
    "Happy New Year!"
  ];
  let randomItem = Math.floor(Math.random() * randomwords.length);
  document.getElementById("random").innerHTML = randomwords[randomItem];
}

ranomWords();
