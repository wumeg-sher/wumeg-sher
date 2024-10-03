

let header = document.querySelector("#aboutHeader");
let passage = document.querySelector("#aboutP");


let aboutContent = {
    headerContent: "About",
    passageContent:"This is a site that displays articles that are relevant to the interests of the IMM program. "+
        "These articles are sorted by the categories of technical, industry, and career. "+
        "Please enjoy these curated articles, and happy designing!"
}


header.textContent = aboutContent.headerContent;
passage.textContent = aboutContent.passageContent;

