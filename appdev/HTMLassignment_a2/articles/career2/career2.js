//content
let titleContent = {
    mainTitle: "IMM News Network",
    };

let articleContent =  {
    title:"How Entry-Level UX Designers can Land UX Jobs With No Experience",
    image:  "career2.jfif",
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


