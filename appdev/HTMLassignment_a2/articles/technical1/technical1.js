//content
let titleContent = {
    mainTitle: "IMM News Network",
    };

let articleContent = {
    title:"White space in UX design",
    image: "technical1.webp",
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


