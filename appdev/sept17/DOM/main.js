let myH1=document.querySelector("#mainH");
myH1.textContent= "weh"

let allLis = document.querySelectorAll("li");
console.log(allLis);

allLis[0].textContent = "wah";

for(let i=0; i<allLis.length; i++){
	allLis[i].textContent = "new content";
}


let myP=document.querySelector("#mainP");
myP.remove();

let newLi = document.createElement("li");
//<li></li>
newLi.textContent="I am a new li from JS";
//<li>I am a new li from JS</li>
console.log(newLi);


let myUl=document.querySelector("#mainUl");
myUl.appendChild(newLi);

