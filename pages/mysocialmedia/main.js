function darkmode() {
  document.body.style.backgroundColor = "#282c34";
  document.getElementById("site-name").style.color = "#939caa";
  document.getElementById("•").style.color = "#939caa";
  document.getElementById("dark-mode").style.visibility = "hidden";
  document.getElementById("light-mode").style.cssText = "color: #939caa; visibility: visible;";
  document.getElementById("jabber").style.color = "white";
  document.getElementById("back").style.cssText = "color: #939caa; background-color: #282c34; border-color: white; ";

}
darkmode();

function lightmode() {
  document.body.style.backgroundColor = "white";
  document.getElementById("site-name").style.color = "black";
  document.getElementById("•").style.color = "black";
  document.getElementById("light-mode").style.visibility = "hidden";
  document.getElementById("dark-mode").style.cssText = "color: black; visibility: visible;";
  document.getElementById("jabber").style.color = "black";
  document.getElementById("back").style.cssText = "color: black; background-color: white; border-color: blue;";
}

function jabberPopup() {
  alert("My Jabber Username: esmailelbob@404.city\n\nMy OMEMO Fingerprint: 528C492F 68B0CC86 3D7C58C6 35B42381 D9FFFDAF 26A59CB9 D7734A62 A5C71517");
}

function wirePopup() {
  alert("My Wire Username: esmailelbob");
}
