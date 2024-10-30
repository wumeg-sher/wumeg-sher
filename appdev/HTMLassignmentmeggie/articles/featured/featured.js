//content
let titleContent = {
    mainTitle: "IMM News Network",
    };

let articleContent =     {
    title:"Design Rational Documentation",
    image: "featuredpic.png",
    url:"https://www.pencilandpaper.io/articles/design-rationale-documentation",
    localURL: "articles/featured/featured.html",
    author:"Ceara Crawshaw",
    previewText:"What does it mean to document your design rationale? [...]" +
        "In short, it's the why of your design decisions.",
    longText: "Why did you decide to do what you did on your most recent round of wireframes? Do you stand by your decisions "+
    "(and feel the logic and choices are solid), or are they mere guesses or shots in the dark (just to get something down to discuss further)? "+
    "Can your stakeholders and collaborators see your thought process and quickly parse where your team is at with a particular design? "+
    "Do you have a consistent way to remember and test your own logic as you navigate your way through the confusing and detailed process of designing "+
    "complex software or features? To address these situations, you need to reassess your relationship with expressing and documenting your design rationale. "
    }



//setting main header
let mainT = document.querySelector("#title");
mainT.textContent = titleContent.mainTitle;


//modified function to build articles 
function createArticle (articleInfo) {
    let container = document.createElement("article");
        let titleName = document.createElement("h2");
        titleName.textContent = articleInfo.title;
        container.appendChild(titleName);

        let imageName = document.createElement("img");
        imageName.src = articleInfo.image;
        imageName.width = 600
        container.appendChild(imageName);

        let urlName = document.createElement("a");
        urlName.textContent = "Link to external article";
        urlName.href = articleInfo.url;
        container.appendChild(urlName)

        let authorName = document.createElement("p");
        authorName.textContent = articleInfo.author;
        container.appendChild(authorName)

        let longTextName = document.createElement("p");
        longTextName.textContent = articleInfo.longText;
        container.appendChild(longTextName)

    return container;
};


//setting article
let articleContainer = document.querySelector("#article");
articleContainer.appendChild(createArticle(articleContent))


