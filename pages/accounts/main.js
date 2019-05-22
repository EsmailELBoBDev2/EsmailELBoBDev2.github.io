function darkmode() {
  document.body.style.backgroundColor = "#282c34";
  document.getElementById("site-name").style.color = "#939caa";
  document.getElementById("•").style.color = "#939caa";
  document.getElementById("dark-mode").style.visibility = "hidden";
  document.getElementById("light-mode").style.cssText = "color: #939caa; visibility: visible;";
  document.getElementById("wire").style.color = "white";
  document.getElementById("my-mail").style.color = "white";
  document.getElementById("back").style.cssText = "color: #939caa; background-color: #282c34; border-color: white; ";

}
darkmode();

function lightmode() {
  document.body.style.backgroundColor = "white";
  document.getElementById("site-name").style.color = "black";
  document.getElementById("•").style.color = "black";
  document.getElementById("light-mode").style.visibility = "hidden";
  document.getElementById("dark-mode").style.cssText = "color: black; visibility: visible;";
  document.getElementById("wire").style.color = "black";
  document.getElementById("my-mail").style.color = "black";
  document.getElementById("back").style.cssText = "color: black; background-color: white; border-color: blue;";
}



function wirePopup() {
  alert("My Wire Username: @esmailelbob");
}

function myEmail() {
  if (confirm("Want Also See My PGP Public Key ?\n\n(Don't Forget To Allow Pop-ups)")) {

    window.open("https://bin.privacytools.io/?b76837c18b68d384#1bqZejcYNE+Ja4eIUlHUQaXevdIICRJc9PjjiEFk1tE=");
    window.open("https://bin.privacytools.io/?333685f063426317#b/jB0zLPZ4GSW9LIw+2eTcz4y1nmzs0FObZHAQ7gebA=");
  } else {
    window.open("https://bin.privacytools.io/?b76837c18b68d384#1bqZejcYNE+Ja4eIUlHUQaXevdIICRJc9PjjiEFk1tE=");
  }

}
