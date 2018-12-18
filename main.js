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

function darkmode(){
document.body.style.backgroundColor = "#282c34";
document.getElementById("site-name").style.color = "#939caa";
document.getElementById("light-mode").style.color = "#939caa";
document.getElementById("light-mode").style.visibility = "visible";
document.getElementById("dark-mode").style.visibility = "hidden";
document.getElementById("name").style.color = "#939caa";
document.getElementById("random").style.color = "#939caa";
let socialMedia = document.querySelectorAll(".fa"); 
socialMedia[0].style.color = "#939caa";
socialMedia[1].style.color = "#939caa";
socialMedia[2].style.color = "#939caa";
socialMedia[3].style.color = "#939caa";
socialMedia[4].style.color = "#939caa";
document.getElementById("coded").style.color = "#939caa";
document.getElementById("with").style.color = "#939caa";
document.getElementById("love").style.color = "#939caa";
document.getElementById("by").style.color = "#939caa";
document.getElementById("my-name").style.color = "#939caa";
}

ranomWords();
darkmode();

function lightmode(){
document.body.style.backgroundColor = "white";
document.getElementById("site-name").style.color = "black";
document.getElementById("dark-mode").style.color = "black";
document.getElementById("light-mode").style.visibility = "hidden";
document.getElementById("dark-mode").style.visibility = "visible";
document.getElementById("name").style.color = "black";
document.getElementById("random").style.color = "black";
let socialMedia = document.querySelectorAll(".fa"); 
socialMedia[0].style.color = "black";
socialMedia[1].style.color = "black";
socialMedia[2].style.color = "black";
socialMedia[3].style.color = "black";
socialMedia[4].style.color = "black";
document.getElementById("coded").style.color = "black";
document.getElementById("with").style.color = "black";
document.getElementById("love").style.color = "black";
document.getElementById("by").style.color = "black";
document.getElementById("my-name").style.color = "blue";
}
