//setting content
let titleContent = {
    mainTitle: "IMM News Network",
};

let contactContent = {
    headerContent: "Contact",
}



//setting main header
let mainT = document.querySelector("#title");
mainT.textContent = titleContent.mainTitle;


//setting content
let header = document.querySelector("#contactHeader");
header.textContent = contactContent.headerContent;



// //submit button
// document.forms.formName.addEventListener("submit", validateForm);
// function checkForm(event){
// 	event.preventDefault();
	
// 	//validate for code goes here

// 	if(formIsValid){
// 		document.forms.formName.submit();
// 	}else{
// 		//show error
// 	}
// }


