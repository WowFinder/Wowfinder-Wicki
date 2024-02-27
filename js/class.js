//Import json5
import JSON5 from 'https://unpkg.com/json5@2/dist/index.min.mjs';

//Captura de elementos
const select = document.getElementById("Classe");
const tituloClasse = document.getElementById("ClassName");
const buttonClass = document.getElementById("ClassButton");
const maxLevel = document.getElementById("maxLevel");
const imgClassRender = document.getElementById("imgClass")

//Exportacion y renderizado de JSON5

async function renderDruidaJSON5() {
    try {
        const response = await fetch('../assets/Classes/clr.json5');
        const jsonString = await response.text();
        const DruidaJSON = JSON5.parse(jsonString);
        maxLevel.textContent= "Max Level: " + DruidaJSON.maxLevel;
        
        console.log(DruidaJSON.maxLevel);     
    } catch(err) {
        console.log("Error al leer el archivo desde la URL:", err);
    }
}

//Logica de Class

function selectClass() {
    if(select.value=="Druida") {
        tituloClasse.textContent="Druida";
        imgClassRender.innerHTML="<img src=\"../img/Class/Druida.jpeg\" width=\"200px\" />";
        renderDruidaJSON5()
        return false;
    }else if(select.value=="Clerigo") {
        tituloClasse.textContent="Clerigo";
        imgClassRender.innerHTML="<img src=\"../img/Class/Clerigo.jpeg\" width=\"200px\" />";
        return false;
    }else if(select.value=="Mago") {
        tituloClasse.textContent="Mago";
        imgClassRender.innerHTML="<img src=\"../img/Class/Mago.jpeg\" width=\"200px\" />";
        return false;
    }else if(select.value=="Picaro") {
        tituloClasse.textContent="Picaro";
        imgClassRender.innerHTML="<img src=\"../img/Class/Picaro.jpeg\" width=\"200px\" />";
        return false;
    }else if(select.value=="Guerrero") {
        tituloClasse.textContent="Guerrero";
        imgClassRender.innerHTML="<img src=\"../img/Class/Guerrero.jpeg\" width=\"200px\" />";
        return false;
    }else if(select.value=="Paladin") {
        tituloClasse.textContent="Paladin";
        imgClassRender.innerHTML="<img src=\"../img/Class/Paladin.jpeg\" width=\"200px\" />";
        return false;
    }
    else if(select.value=="Cazador") {
        tituloClasse.textContent="Cazador";
        imgClassRender.innerHTML="<img src=\"../img/Class/Cazador.jpeg\" width=\"200px\" />";
        return false;
    }
    else if(select.value=="Sacerdote") {
        tituloClasse.textContent="Sacerdote";
        imgClassRender.innerHTML="<img src=\"../img/Class/Sacerdote.jpeg\" width=\"200px\" />";
        return false;
    }else if(select.value=="Chaman") {
        tituloClasse.textContent="Chaman";
        imgClassRender.innerHTML="<img src=\"../img/Class/Chaman.jpeg\" width=\"200px\" />";
        return false;
    }else if(select.value=="Monje") {
        tituloClasse.textContent="Monje";
        imgClassRender.innerHTML="<img src=\"../img/Class/Monje.jpeg\" width=\"200px\" />";
        return false;
    }
    return true;
}
buttonClass.addEventListener('click', selectClass);
