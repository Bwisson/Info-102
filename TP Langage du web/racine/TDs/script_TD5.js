var nb1 = document.getElementById("nombre1");

var nb2 = document.getElementById("nombre2");

var bouton1 = document.getElementById("Moyenne");

var res = document.getElementById("moyenne");

bouton1.addEventListener("click", afficheRes);
function afficheRes(){
  res.innerHTML = moyenne(parseInt(nb1.value),parseInt(nb2.value));
  console.log("je suis là")
}

function moyenne(n1, n2){
  var f 
  f = (n1+n2)/2;
  return f;
}

var vent = document.getElementById("vit_vent");

var etat = document.getElementById("etat_mer");

var bouton2 = document.getElementById("Calculer");

var drapeau = document.getElementById("Drapeau");

bouton2.addEventListener("click", affRes);
function affRes(){
  res.innerHTML = couleur(vent.value, etat.value)
}

function couleur(vent, etat){
  var res = ""
  if (vent == "De 0 à 20 km/h" && etat == "Calme"){
    res = "Vert";
  }
  else if (vent == "Supérieur à 40 km/h" || etat == "Très agitée"){
    res = "Rouge";
  }
  else{
    res = "Orange";
  }
  return res;
}

