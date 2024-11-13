//data structures for the data on the page
let titleContent = {
    mainTitle: "IMM News Network",
    introP: "Welcome to the IMM News Network! We hope you can find design inspiration, or whatever else you're looking for here!"
};

let links = ["Home", "About", "Contact"];



let featuredArticle = [
    {
    title:"Design Rational Documentation",
    image:  "articles/featured/featuredpic.png",
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
];


let careerArticle = [
    {
    title:"14 Best UX Portfolio Website Builders for Junior Designers in 2024",
    image:  "articles/career1/uxportfolio.webp",
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
    },    
    {
    title:"How Entry-Level UX Designers can Land UX Jobs With No Experience",
    image:  "articles/career2/career2.jfif",
    url:"https://uxplaybook.org/articles/how-to-land-ux-job-with-no-experience",
    localURL: "articles/career2/career2.html",
    author:"Christopher Nguyen",
    previewText:"Learn how to kickstart your UX career with zero experience.",
    longText: "Step 1: Leverage Your Transferable Skills in UX Design. "+
        "Identify Skills from Your Past Experiences Valuable in UX. "+
        "It's crucial to recognize the skills you already have, even if they come from unrelated fields. "+
        "Here are the invaluable skills you can focus on: "+
        "Listening and Communication: "+
        "Whether you've worked in customer service or any other role that requires active listening and clear communication. "+
        "These skills are the foundation of understanding user needs in UX design. "+
        "Research Skills: "+
        "If you have experience in market research, academia, or any field that involves gathering and analyzing data, you're on the right track. "+
        "Collaboration and Teamwork: "+
        "If you've previously worked in teams in various roles, such as marketing or human resources, you likely possess the collaborative skills needed in UX projects." 
    }
];


let technicalArticle = [
    {
    title:"White space in UX design",
    image:  "articles/technical1/technical1.webp",
    url:"https://medium.com/ringcentral-ux/white-space-in-ux-design-2b6b996c2b9c",
    localURL: "articles/technical1/technical1.html",
    author:"Sergey Vlastiuk",
    previewText:"It’s important when you’re putting together a design layout that you let elements on the page breathe." ,
    longText: "White space is a very useful technique when you’re creating design layouts. "+
        "It’s important when you’re putting together a design layout that you let elements on the page breathe. "+
        "The best way to do that is by introducing what’s known as white space. "+
        "White space isn’t a difficult technique to learn. Basically all you need to do is create room around each of the elements "+
        "whether they are text, images, or graphics. On the page, make sure to leave enough room around each element "+
        "so that they can have their own visual focus. That way when someone is viewing your design they can get an easy feel for it "+
        "and they can take on board what you are trying to say. Due to this, empty space is a legitimate design element that has a great influence on the user experience."
    },
    {
    title:"UX Design Process – An Actionable, 7-Step Guide",
    image:"articles/technical2/technical2.png",
    url:"https://www.uxpin.com/studio/blog/design-process-ux/",
    localURL: "articles/technical2/technical2.html",
    author:"UXpin",
    previewText:"UX design process is systematic, iterative, and structured series of actions that is necessary for designing user experience." ,
    longText: "UX design is a digital product design methodology to solve a human problem. “UX” stands for user experience. "+
        "This human-centered design approach ensures design teams make decisions based on user feedback rather than assumptions. "+
        "Empathy is at the core of this human-centered approach. UX designers must understand the user problems, "+
        "as well as what target users want to achieve with a digital product and the pain points they might encounter along the way."
    }
];


let industryArticle = [
    {
    title:"Why UX Design is an Important Consideration",
    image:"articles/industry1/industry1.webp",
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
    },
    {
    title:"The Next Big AI-UX Trend—It’s not Conversational UI",
    image:"articles/industry2/industry2.jpg",
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
    }
];

let categoryArticles = [careerArticle, technicalArticle, industryArticle];
let categories = ["Career", "Technical", "Industry"];


let months = ["October", "September", "August" ,"July", "June", "May"];
let visitorNum = ["45", "246", "216" ,"98", "154", "145"];
let tableData = [months, visitorNum]



//setting the main heading
let mainT = document.querySelector("#title");
let introPassage = document.querySelector("#introPara");
mainT.textContent = titleContent.mainTitle;
introPassage.textContent = titleContent.introP;




//function to build articles 
function createArticle (articleInfo, articleType) {
    let container = document.createElement("article");
        let titleName = document.createElement("h2");
        titleName.textContent = articleInfo.title;
        container.appendChild(titleName);

        let imageName = document.createElement("img");
        imageName.src = articleInfo.image;
        imageName.width = 600
        container.appendChild(imageName);

        let urlName = document.createElement("a");
        urlName.textContent = "Link to article";
        urlName.href = articleInfo.localURL;
        container.appendChild(urlName)

        let authorName ;
        console.log(articleType)
        if (articleType === "Career") {
            authorName = document.createElement("careerAuth")
            console.log("career");
        } else if (articleType === "Technical") {
            authorName = document.createElement("techAuth");
            console.log("technical")
        } else {
            authorName = document.createElement("p");
        }
        authorName.textContent = articleInfo.author;
        container.appendChild(authorName)

        let previewName = document.createElement("p");
        previewName.textContent = articleInfo.previewText;
        container.appendChild(previewName)

    return container;
};



//setting featured article
let articleContainer = document.querySelector("#featArticle");
articleContainer.appendChild(createArticle(featuredArticle[0]), "feed")




//setting categories
let sectionContainer = document.querySelector("#articleCategories");
for (let i=0; i<categoryArticles.length; i++){
    let section = document.createElement("section");
    let sectionHeading = document.createElement("h2");
    sectionHeading.textContent = categories[i];
    section.appendChild(sectionHeading);
    for (let j=0; j<categoryArticles[i].length; j++){
        section.appendChild(createArticle(categoryArticles[i][j], categories[i]))

    };
    sectionContainer.appendChild(section);
}





//setting visitor table 
let table = document.querySelector("#visitorTable");
for (let i=0; i<tableData.length; i++){
    let row = document.createElement("tr");
    for (let j=0; j<tableData[i].length; j++){
        let data = document.createElement("td");
        data.textContent = tableData[i][j];
        row.appendChild(data);
    }
    table.appendChild(row);
};






//setting cookies footer
let footer = document.querySelector("#footer")
footer.textContent = "Website cookie usage"

let cookieText = document.createElement("p");
cookieText.textContent = "This website uses cookies. Please accept usage for a better experience";
footer.appendChild(cookieText);

let cookieLink = document.createElement("a");
cookieLink.textContent = "Accept cookies"
cookieLink.href = "#";
footer.appendChild(cookieLink);
