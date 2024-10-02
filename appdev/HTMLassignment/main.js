let links = ["Home", "About", "Contact"]
let categories = ["Industry", "Technical", "Career"]

let months = ["October", "September", "August" ,"July", "June", "May"]
let visitorNum = ["456", "2465", "2164" ,"982", "1546", "1454"]




let articles =  
    [
    {title: "guitar",
    image: "",
    url:"https://oakvilleguitaracademy.ca/",
    author: "author",
    previewText: ""
    }
    ]



for (let i=0; i<articles.length; i++){
    let title = document.querySelector("#articleTitle");

    let newLi = document.createElement("li");
        
    let newATag = document.createElement("a");
    //<a></a>

    newLi.appendChild(newATag);
    //<li><a></a></li>

    let newSpan = document.createElement("span");
    newLi.appendChild(newSpan);
    //<li><a></a><span></span></li>

    newATag.textContent = hobbies[i].name;
    newSpan.textContent = hobbies[i].cost;
    };

