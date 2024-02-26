//Captura de elementos
const select = document.getElementById("Classe");
const tituloClasse = document.getElementById("ClassName");
const buttonClass = document.getElementById("ClassButton");
const maxLevel = document.getElementById("maxLevel");

//import json5




//Logica de Class

function selectClass() {
    if(select.value=="Druida") {
        tituloClasse.textContent="Druida";
        return false;
    }else if(select.value=="Clerigo") {
        tituloClasse.textContent="Clerigo";
        return false;
    }
    return true;
}
buttonClass.addEventListener('click', selectClass);
