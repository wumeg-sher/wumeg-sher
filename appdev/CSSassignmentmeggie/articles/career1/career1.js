//content
let titleContent = {
    mainTitle: "IMM News Network",
    };

let articleContent = {
    title:"14 Best UX Portfolio Website Builders for Junior Designers in 2024",
    image: "uxportfolio.webp",
    url:"https://uxplaybook.org/articles/best-ux-portfolio-website-builders-2024",
    localURL: "articles/career1/career1.html",
    author:"Christopher Nguyen",
    previewText:"Explore the top UX portfolio builders for junior designers." +
        "Dive into tools like Webflow, Framer, Behance, Squarespace, UXFolio, and Notion" ,
    longText: "What is the best UX portfolio website builder in 2024? " +
        "Every UX designer knows the weight of a portfolio. " +
        "It's not just a digital footprint, it's a showcase, a personal narrative, a gateway into their unique universe of design. " +
        "But, just when the creative juices start flowing, there's a hiccup—how to find the RIGHT tool for you in the sea of thousands of different tools? " +
        "The sheer number of platforms and tools can be overwhelming, especially for junior designers. " +
        "This blog post aims to provide expert insights into the top portfolio builder tools in the market and help Designers make informed decisions. " +
        "Without further ado, let's dive in. " +
        "Webflow " +
        "If you're looking to showcase advanced interactions and rich animations, Webflow is what you need for your UX case studies. " +
        "Its responsive design capabilities ensure a smooth experience for your audience, regardless of the device. " +
        "Pricing: Mostly FREE " +
        "Rating: 8/10 " +
        "Why I Love It " +
        "Webflow gives me the freedom to bring my most ambitious UX case studies to life without the need for extensive coding. " +
        "Its high customizability ensures that your UX portfolio stands out, making it truly yours. " +
        "Pros: " +
        "Provides extensive customization options. " +
        "Easily integrates animations and interactions. " +
        "Features responsive design capabilities. "
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


