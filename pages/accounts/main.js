function darkmode() {
  document.body.style.backgroundColor = "#282c34";
  document.getElementById("site-name").style.color = "#939caa";
  document.getElementById("•").style.color = "#939caa";
  document.getElementById("dark-mode").style.visibility = "hidden";
  document.getElementById("light-mode").style.cssText = "color: #939caa; visibility: visible;";
  document.getElementById("jabber").style.color = "white";
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
  document.getElementById("jabber").style.color = "black";
  document.getElementById("wire").style.color = "black";
  document.getElementById("my-mail").style.color = "black";
  document.getElementById("back").style.cssText = "color: black; background-color: white; border-color: blue;";
}

function mewePopup() {
  alert("My Mewe Username: Esmail EL BoB");
}

function mastodonPopup() {
  alert("My Mastodon Username: @esmailelbob@mastodon.xyz");
}

function pixelfedPopup() {
  alert("My Pixelfed Username: esmailelbob");
}

function redditPopup() {
  alert("My Reddit Username: EsmailELBoB");
}

function jabberPopup() {
  alert("My Jabber Username: esmailelbob@chatserver.space\n\nMy OMEMO Fingerprint: BBC6408D C12BEC96 C4874E04 0D6B6426 3CFC9D8D 858806CC 24349FB3 40BB7068");
}

function wirePopup() {
  alert("My Wire Username: esmailelbob");
}

function mindsPopup() {
  alert("My Minds Username: esmailelbob");
}

function peertubePopup() {
  alert("My PeerTube Channel Name: esmailelbob");
}

function githubPopup() {
  alert("My Github Username: EsmailELBoBDev2");
}

function gitlabPopup() {
  alert("My Gitlab Username: EsmailELBoBDev2");
}

function myEmail() {
window.open('pages/email/my-email.html');
window.open('pages/email/my-pgp-public-key.html');
}