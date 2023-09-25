const body = document.querySelector("body")
const table = document.querySelector("table")
const button = document.querySelector("#form button")

function create(tag,text,container){
    let el=document.createElement(tag)
    el.appendChild(document.createTextNode(text))
    container.appendChild(el)
    return el
}

function display(obj){
    tr = create("tr","",table)
    create("td",obj.name,tr)
    table.appendChild(tr)
}

button.addEventListener("click", function(){
    var filter=document.querySelector("#filter").value
    var url = "https://swapi.dev/api/"+filter+"/"+(Math.round(Math.random()*30)+1)
    axios.get(url).then(response => {display(response.data)})
    console.log(filter)
    console.log(url)
})
