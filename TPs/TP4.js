var page = document.querySelector(".vitrine");
var menu = document.querySelector(".iconeMenu");

menu.addEventListener("click", clicMenu);
function clicMenu(){
    if(menu.className == "iconeMenu afficheMenu"){
        menu.className = menu.className.replace("iconeMenu afficheMenu", "iconeMenu");
    }
    else{
        menu.className += " afficheMenu";
    }
    if(page.className == "vitrine afficheMenu"){
        page.className = page.className.replace("vitrine afficheMenu", "vitrine");
    }
    else{
        page.className += " afficheMenu";
    }
}