//main.js

let first = document.querySelector("#num1");
let firstAlt = document.forms.additionForm.num1;
//these two do the same thing

let second = document.querySelector("#num2");

//et divBtn = document.querySelector("#divBtn")
let result = document.querySelector("#output");

let theForm = document.forms.additionForm;


theForm.addEventListener("submit", sayHello);
function sayHello (event) {
    event.preventDefault();
    console.log(first.value);
    console.log(second.value)
    console.log(Number(first.value)+Number(second.value));

    result.textContent = (Number(first.value)+Number(second.value));
};

let rangeOutput = document.querySelector("#rangeOut");
let theRange = document.querySelector("#range");

theRange.addEventListener("change", ()=>{
    console.log(event.target.value);
    rangeOutput.textContent = theRange.value;
});

