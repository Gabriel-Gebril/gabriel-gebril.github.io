var cDisplay = document.querySelector("#rColor");
var cBtn = document.querySelectorAll(".cBtn");
var nCBtn = document.querySelector("#nC");
var dHard = document.querySelector("#dHard");
var msg = document.querySelector("#msg");
var ezBtn = document.querySelector("#ezBtn");

function loadHard() {
	document.querySelector(".jumbotron").style.backgroundColor = "#76a4f2";
	msg.textContent = "";
	ezBtn.classList.remove("active");
	dHard.classList.add("active");
	var rChoice = Math.floor(Math.random() * 6);
	cDisplay.textContent = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
	cBtn[rChoice].style.backgroundColor = cDisplay.textContent.toLowerCase();
	for (var i = cBtn.length - 1; i >= 0; i--) {
		if(i != rChoice){
			cBtn[i].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
		}
	}
	for (var i = cBtn.length - 1; i >= 0; i--) {
	 cBtn[i].style.visibility="visible";
	}
}

function loadEZ(){
	msg.textContent = "";
	document.querySelector(".jumbotron").style.backgroundColor = "#76a4f2";
	ezBtn.classList.add("active");
	dHard.classList.remove("active");
	var rChoice = Math.floor(Math.random() * 3);
	cDisplay.textContent = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
	cBtn[rChoice].style.backgroundColor = cDisplay.textContent.toLowerCase();
	for (var i = 2; i >= 0; i--) {
		cBtn[i].style.visibility="visible";
		if(i != rChoice){
			cBtn[i].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
		}
	}
	for (var i = cBtn.length - 1; i >= 3; i--) {
	 cBtn[i].style.visibility="hidden";
	}
}

document.addEventListener("DOMContentLoaded", loadHard);

ezBtn.addEventListener("click",loadEZ);

dHard.addEventListener("click",loadHard);

nCBtn.addEventListener("click", function(){
	if(ezBtn.classList.contains("active")){
		loadEZ();
	}else{
		loadHard();
	}
});

for (var i = cBtn.length - 1; i >= 0; i--) {
	cBtn[i].addEventListener("click",function(){

		if(this.style.backgroundColor === cDisplay.textContent){
			msg.textContent = "Correct";
			document.querySelector(".jumbotron").style.backgroundColor = cDisplay.textContent;
			for (var j = cBtn.length - 1; j >= 0; j--) {
				cBtn[j].style.visibility = "visible";
				cBtn[j].style.backgroundColor = cDisplay.textContent;
			}
		}else{
			msg.textContent = "Try Again!";
			this.style.visibility = "hidden";
		}
	});
}

