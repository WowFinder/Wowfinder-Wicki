import JSON5 from 'https://unpkg.com/json5@2/dist/index.min.mjs'; 

//Capture elements from html spellList render
const select = document.getElementById('spellsList');
const selectSpell = document.getElementById('spells');
const spellListButton = document.getElementById('selectSpellList');
const selectSpellLevel = document.getElementById('levelSpellList');

//Capture elements from html spells render
const comfirmSpellButton = document.getElementById('selectSpell');
const spellsRenderSpace = document.getElementById('renderSpell');

//Create reference to export json file
var fullSepellList = select.value;
var spellListFile = `../assets/SpellLists/${fullSepellList}.json5`;
const responseSpell = await fetch(spellListFile);
const jsonSpellList = await responseSpell.text();
const spellListJSON = JSON5.parse(jsonSpellList);
const spells = spellListJSON['spells'];

//render spellsList
async function catchSpells() {
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

spellListButton.addEventListener('click',catchSpells);


//render spells
async function renderSpell() {
    const spellToRender = selectSpell.value;
    const spellToRenderFile = await fetch(`../assets/Spells/${spellToRender}.json5`);
    const spellToRenderJSON = await spellToRenderFile.text();
    const spellToRenderJSONParsed = JSON5.parse(spellToRenderJSON);
    const ranksSpell = spellToRenderJSONParsed['ranks'];
    const listRanks = ranksSpell;  
//Text rendering spell
    spellsRenderSpace.innerHTML = `<h1>${spellToRenderJSONParsed['key']}</h1>`;
    spellsRenderSpace.innerHTML += `<p><span>School: </span> ${spellToRenderJSONParsed['sch']}</p>`;
    spellsRenderSpace.innerHTML += `<p><span>Componentes: </span> ${spellToRenderJSONParsed['components']}</p>`;
    spellsRenderSpace.innerHTML += `<p><span>Duracion: </span> ${spellToRenderJSONParsed['duration']}</p>`;
    spellsRenderSpace.innerHTML += `<p><span>Tiempo de Lanzamiento: </span> ${spellToRenderJSONParsed['castingTime']}</p>`;
   /* for (let rank = 1; listRanks.length != null; rank++) {
        let rankSpell = listRanks[rank];
        let objectRank = Object.keys(rankSpell);
        spellsRenderSpace.innerHTML += `<h2>${rank}</h2>`;
        for (let i = 0; 0 <= i || rankSpell[objectRank] != null; i++) {
            spellsRenderSpace.innerHTML += `<p><span>${objectRank[i]}</span> ${rankSpell[objectRank[i]]}</p>`;
        }
    }*/
}

comfirmSpellButton.addEventListener('click',renderSpell);