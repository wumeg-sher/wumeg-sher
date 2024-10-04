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



//validating email address
let theForm = document.forms.form;

theForm.addEventListener("submit", checkForm);

function checkForm (event) {
    event.preventDefault();
    let emailEntry = document.querySelector("#email");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailEntry.value))
        {
          return (true)
        }
          alert("Error: Invalid email address!")
          return (false)
};



