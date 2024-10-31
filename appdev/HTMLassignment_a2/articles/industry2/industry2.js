//content
let titleContent = {
    mainTitle: "IMM News Network",
    };

let articleContent = {
    title:"The Next Big AI-UX Trend—It’s not Conversational UI",
    image:"industry2.jpg",
    url:"https://uxmag.com/articles/the-next-big-ai-ux-trend-its-not-conversational-ui",
    localURL: "articles/industry2/industry2.html",
    author:"Kshitij Agrawal",
    previewText:" The article explores the concept of aiOS, highlighting four key values: "+
        "dynamic interfaces, interoperable apps, context-aware functionality, and the idea that everything can be an input and output.",
    longText: "Imagine an operating system where all your apps communicate seamlessly, adapting to your context and needs. "+
        "The article explores the concept of aiOS, highlighting four key values: dynamic interfaces, interoperable apps, "+
        "context-aware functionality, and the idea that everything can be an input and output. This vision of AI-powered user "+
        "experiences could revolutionize how we interact with technology, making it more intuitive and efficient. Is aiOS the future of user interfaces? "+
        "Everything is an input and everything is an output. What if you could browse ALL your things in ONE fluid interface? "+
        "AI’s like my 4-year-old nephew. Every week, he wants to be something new when he grows up… "+
        "One day it’s a soccer pro. The next day it’s an astronaut. Now, he just wants to be a garbage man. "+
        "AI’s similar. It has a ton of different narratives right now. "+
        "Human clone. Stalker. World domination. You name it."
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


