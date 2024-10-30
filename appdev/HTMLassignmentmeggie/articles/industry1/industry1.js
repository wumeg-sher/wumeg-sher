//content
let titleContent = {
    mainTitle: "IMM News Network",
    };

let careerContent =  {
    title:"Why UX Design is an Important Consideration",
    image:"industry1.webp",
    url:"https://bmmagazine.co.uk/business/why-ux-design-is-an-important-consideration/",
    localURL: "articles/industry1/industry1.html",
    author:"Business Matters",
    previewText:"UX, short for user experience, is a huge factor in designing and running a successful website. " ,
    longText: "UX refers to how a user interacts with any given product or service, in this case, the website. "+
        "It helps to explain each interaction a user might have with the website, considering each element that shapes that experience. "+
        "UX design takes into consideration how the experience makes the user feel and how easy it is for them to accomplish what they need to do. "+
        "For instance, if your website makes it easy for a customer to find the product they need, add it to their basket and checkout effortlessly, "+
        "you likely have great UX design already. However, if your website is hard to navigate or it’s not clear how to complete an action on the page, "+
        "your customer will likely report a poor experience."
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
articleContainer.appendChild(createArticle(careerContent))


