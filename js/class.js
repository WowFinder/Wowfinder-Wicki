import JSON5 from 'https://unpkg.com/json5@2/dist/index.min.mjs'; 

const classMap = {
  Bárbaro: "brb",
  Bardo: "brd",
  Clérigo: "clr",
  Druida: "drd",
  Luchador: "fgt",
  Mago: "mag",
  Orco: "orc",
  Pícaro: "rog",
};

const select = document.getElementById("Classe");
const tituloClasse = document.getElementById("ClassName");
const buttonClass = document.getElementById("ClassButton");
const Habilidades = document.getElementById("skills");
const imgClassRender = document.getElementById("imgClass");
const pSpells = document.getElementById("spells")


function updateClassInfo(className) {
  tituloClasse.textContent = className;
  imgClassRender.innerHTML = `<img src="../img/Class/${className}.jpeg" width="200px" />`;

  renderJSON(className).catch(err => console.error("Error rendering JSON:", err));
}

async function renderJSON(className) {
  try {
    const fullClassName = classMap[className];
    const classFile = `../assets/Classes/${fullClassName}.json5`;
    const response = await fetch(classFile);
    const jsonString = await response.text();
    const ClassJSON = JSON5.parse(jsonString);
    const habilidades = ClassJSON.skills;
    Habilidades.textContent = "Skills: " + habilidades.join(", ") + " .";
    const spellsList = ClassJSON.features;
    let level_1_features = spellsList.filter(spellsList => spellsList.level === 1);
    
    let SellLevel1 = level_1_features.map(spellsList => spellsList.feature);
    pSpells.textContent = "Spells de nivel 1: " + SellLevel1.join(", ") + " .";
    
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

buttonClass.addEventListener('click', function() {
  const selectedClass = select.value;
  updateClassInfo(selectedClass); // Call updateClassInfo on click
});


