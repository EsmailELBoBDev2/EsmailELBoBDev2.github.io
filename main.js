function ranomWords() {
  let randomwords = [
    "Hey, User!",
    "Nothing Here! <br> Close This Website",
    "Don't Look Behind You",
    "Oh You Broke It!"
  ];
  let randomItem = Math.floor(Math.random() * randomwords.length);
  document.getElementById("random").innerHTML = randomwords[randomItem];


  if (randomItem == 3) {
    document.getElementById("site-name").innerHTML = "qoq ˥Ǝ lᴉɐɯsƎ";
    document.getElementById("dark-mode").innerHTML = "ǝpoW ʇɥƃᴉ˥";
    document.getElementById("light-mode").innerHTML = "ǝpoW ʞɹɐp";
    document.getElementById("name").innerHTML = "pǝɯɯɐɥoW lᴉɐɯsI";
  }
}


function darkmode() {
  document.body.style.backgroundColor = "#282c34";
  document.getElementById("site-name").style.color = "#939caa";
  document.getElementById("•").style.color = "#939caa";
  document.getElementById("dark-mode").style.visibility = "hidden";
  document.getElementById("light-mode").style.cssText = "color: #939caa; visibility: visible;";
  document.getElementById("name").style.color = "#939caa";
  document.getElementById("random").style.color = "#939caa";
  document.getElementById("accounts").style.cssText = "color: #939caa; background-color: #282c34; border-color: white;";
  document.getElementById("coded").style.color = "#939caa";
  document.getElementById("with").style.color = "#939caa";
  document.getElementById("love").style.color = "#939caa";
  document.getElementById("by").style.color = "#939caa";
  document.getElementById("my-name").style.color = "#939caa";
}
ranomWords();
darkmode();

function lightmode() {
  document.body.style.backgroundColor = "white";
  document.getElementById("site-name").style.color = "black";
  document.getElementById("•").style.color = "black";
  document.getElementById("light-mode").style.visibility = "hidden";
  document.getElementById("dark-mode").style.cssText = "color: black; visibility: visible;";
  document.getElementById("name").style.color = "black";
  document.getElementById("random").style.color = "black";
  document.getElementById("accounts").style.cssText = "color: black; background-color: white; border-color: blue;";
  document.getElementById("coded").style.color = "black";
  document.getElementById("with").style.color = "black";
  document.getElementById("love").style.color = "black";
  document.getElementById("by").style.color = "black";
  document.getElementById("my-name").style.color = "blue";
}
