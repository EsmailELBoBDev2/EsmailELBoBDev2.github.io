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

    window.open("https://bin.privacytools.io/?28b988ed41fd8df8#XvuWAdtMU6acxVhmsMc3t56NDODozXq+8NUTN3w1vOc=");
    window.open("https://bin.privacytools.io/?eb9d522e29f02d5b#pWZty6S4m04UUdhRPHPAKAE3YfWTwcV6j1zCXkhoHxA=");
  } else {
    window.open("https://bin.privacytools.io/?28b988ed41fd8df8#XvuWAdtMU6acxVhmsMc3t56NDODozXq+8NUTN3w1vOc=");
  }

}
