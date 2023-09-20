let url = " https://swapi.dev/api/people/1"; 
const body = document.querySelector("body");

async function get_data_from_url(url) {
    /* récupère des données depuis l'url
                entrée: url pour accès api 
    */
    let response = await axios.get(url)
    return response.data;
}

function create_new_element(tag, text=null, id){
     /* renvoie un nouvel element du dom avec un potentiel text et id
            entrée: tag élément
                    text: text à mettre dans élément
                    id: id élément
            sortie: element du dom
    */
   let element = document.createElement(tag);
    if (text){
        let textNode = document.createTextNode(text);
        element.appendChild(textNode);
    }
    if (id){
        element.id = id;
    }
    return element;
}

function create_li(){
    //crée les li à ajouter à ul pour créer le menu
    titres.forEach(function (titre, i) {
        let li = create_new_element("li", titre, prefix_id+i)
        add_event_listener_main(li, );
        container.appendChild(li)
   });
}

function generate_menu(){
    //génère le menu pour naviguer dans les catégories
    get_data_from_url(url);
    let ul = create_new_element("ul", text=null, id="menu");
    create_li();
    body.appendChild(ul);
}

generate_menu();