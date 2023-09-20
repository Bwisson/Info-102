const body = document.querySelector("body");

function generate_bubulle(){    
    let bubulle = document.createElement("div");
    bubulle.className = "bubulle";
    let top = Math.random() * window.innerHeight + 25;
    let left = Math.random() * window.innerWidth + 25;

    bubulle.style.top = top + "px";
    bubulle.style.left = left + "px";
    generate_color(bubulle);
    grosse_bubulle(bubulle);
    return bubulle;
}

function generate_color(bubulle){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    let rgb = "rgb(" + r + "," + g + "," + b + ")";

    bubulle.style.setProperty("background-color", rgb);
}

function grosse_bubulle(bubulle){
    bubulle.onmouseenter = function(){
        bubulle.style.scale = 1.5;
    }
    bubulle.onmouseleave = function(){
        bubulle.style.scale = 1;
    }
    bubulle.onclick = function(){
        bubulle.remove();
        score();
    }
    return bubulle;
}

function score(){
    let score = document.querySelector("#score");
    score.innerHTML = parseInt(score.innerHTML) + 1;    
}

function main(){
    body.appendChild(generate_bubulle());
}
setInterval(main, 500);