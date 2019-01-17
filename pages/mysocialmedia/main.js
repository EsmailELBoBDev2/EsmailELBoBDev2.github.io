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
  alert("My XMPP/Jabber Username: esmailelbob@anonym.im \nMy OTR Fingerprint: DC9EE F7C09193 CD6B3A14 9AA532DC 6FA17DB8");
}
