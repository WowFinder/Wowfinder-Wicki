import JSON5 from 'https://unpkg.com/json5@2/dist/index.min.mjs'; 

//Capture elements
const select = document.getElementById('spellsList');
const selectSpell = document.getElementById('spells');
const spellListButton = document.getElementById('selectSpellList');
const selectSpellLevel = document.getElementById('levelSpellList');



//Create reference to export json file
var fullSepellList;
var spellListFile;
var selectSpelllavelFile;
var levelSpellListFile;

//Create reference to export json file
async function catchSpells() {
    fullSepellList = select.value;
    spellListFile = `../assets/SpellLists/${fullSepellList}.json5`;
    const responseSpell = await fetch(spellListFile);
    const jsonSpellList = await responseSpell.text();
    const spellListJSON = JSON5.parse(jsonSpellList);
    const spells = spellListJSON['spells'];
    for (let level = 1; spells[level] != null; level++) {
        spellListFile=[];
        spellListFile.push(spells[level]);
        selectSpellLevel.innerHTML += `<option value="${level}">${level}</option>`;
        for (let spellInd = 1; spells[level][spellInd] != null; spellInd++) {
            selectSpell.innerHTML += `<option value="${spells[level][spellInd].spell}">${spells[level][spellInd].spell}</option>`;
            console.log(level);
        }
    }
}

function renderSpell() {
    
}



spellListButton.addEventListener('click',catchSpells);




