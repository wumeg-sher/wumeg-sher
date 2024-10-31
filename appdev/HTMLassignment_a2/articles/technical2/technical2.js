//content
let titleContent = {
    mainTitle: "IMM News Network",
    };

let articleContent = {
    title:"UX Design Process – An Actionable, 7-Step Guide",
    image:"technical2.png",
    url:"https://www.uxpin.com/studio/blog/design-process-ux/",
    localURL: "articles/technical2/technical2.html",
    author:"UXpin",
    previewText:"UX design process is systematic, iterative, and structured series of actions that is necessary for designing user experience." ,
    longText: "UX design is a digital product design methodology to solve a human problem. “UX” stands for user experience. "+
        "This human-centered design approach ensures design teams make decisions based on user feedback rather than assumptions. "+
        "Empathy is at the core of this human-centered approach. UX designers must understand the user problems, "+
        "as well as what target users want to achieve with a digital product and the pain points they might encounter along the way."
    };



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


