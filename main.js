let randomMeme = [
	"src/memes/149528873_215013626984585_3729308711515613928_n.jpg",
	"src/memes/149528873_215013626984_37938711515613928_n.png",
	"src/memes/149528873_215013626984585_37293087115156139.jpg",
	"src/memes/149528873_2150136269845858_n.jpg",
	"src/memes/14952884_37938711515613928_n.png",
	"src/memes/149528873_2150136269841515613928_n.png",
	"src/memes/149528873_21501362698415.jpg"
];
let randomItem = Math.floor(Math.random() * randomMeme.length);
document.getElementById("rmeme").setAttribute('href', randomMeme[randomItem]);


function ActiveNav(e) {
  if (document.querySelector('#navList a.active') !== null) {
    document.querySelector('#navList a.active').classList.remove('active');
  }
  e.target.className = "active";
}

console.log("Do one thing and do it well"); 
console.log("Keep it simple, stupid");
console.log("Feel free to use this website in anyway you want, There is no DRM here!"); 
