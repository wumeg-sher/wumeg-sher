document.addEventListener('keyup', function(event) {
    console.log(event.code)})


let theClicker = document.querySelector("#clicker");

//theClicker.onclick = function() {console.log("clicking")}

theClicker.addEventListener("click", showSomeDOM);

function showSomeDOM(event){
    console.log(event);
    console.log(event.type);
    console.log(event.target);


    for (let i=0; i<hobbies.length; i++) {
        // {console.log (hobbies[i].name, hobbies[i].cost, hobbies[i].website)
        // };
    
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
    
        if (hobbies[i].cost>1000)
            {newSpan.textContent = " $" + hobbies[i].cost + " EXPENSIVE!";}
        else{newSpan.textContent = " $" + hobbies[i].cost}
    
        newATag.href = hobbies[i].website;
    
        console.log(newLi);
    
        theUl.appendChild(newLi);

        newLi.addEventListener("click", removeMe)
        function removeMe (event) {event.target.remove()}
    }
};

// theClicker.addEventListener("click", (e)=>{
//     console.log("clicking")
// });


let hobbies =  
    [
    {name: "guitar",
    cost: 1500,
    website:"https://oakvilleguitaracademy.ca/"
    },
    {
    name: "games",
    cost: 500,
    website:"https://store.steampowered.com/"
    },
    {
    name: "hockey",
    cost: 5000,
    website:"https://www.hockeycanada.ca/"
    },
    {
    name: "crochet",
    cost: 400,
    website:"https://www.ravelry.com/"
        }
    ]
        

// for (let i=0; i<hobbies.length; i++) 
//     {console.log (hobbies[i])
//     };

//  <li>
//     <a href="https://oakvilleguitaracademy.ca/"> guitar</a> 
//     <span>$1500</span>
//  </li>


let theUl = document.querySelector("#hobbiesList");
//theUl.style.backgroundColor = "yellow"

