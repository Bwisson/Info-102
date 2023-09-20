const body = document.querySelector("body");
const json_data = [
    {
    "title": "USMB",
    "url": "https://univ-smb.fr/",
    "category": "taf"
    },
    {
    "title": "Useless Web",
    "url": "https://theuselessweb.com/",
    "category": "wtf"
    }
];

function create_li(text){
    // créer un li, y ajoute un élément et le renvoie
    let li = document.createElement("li");
    let title = document.createTextNode(text);
    li.appendChild(title);
    return li;
}

function create_a(link){
    // créer un lien, y ajoute un élément et le renvoie
    let a = document.createElement("a");
    link = link.link(link)
    a.appendChild(link);
   

    return a;
}

let ul = document.createElement("ul");

//ul.appendChild(li);

json_data.forEach(element => {
    let title = create_li(element["title"]);
    let url = create_li(create_a(["url"]));
    let cat = create_li(element["category"]);

    ul.appendChild(title);
    ul.appendChild(url);
    ul.appendChild(cat);

console.log(url);
});
body.appendChild(ul);