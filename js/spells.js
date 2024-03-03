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
    try {
      // 1. Get selected spell and build file path
      const spellToRender = selectSpell.value;
      const spellToRenderFile = `../assets/Spells/${spellToRender}.json5`;
  
      // 2. Fetch spell data with error handling
      const spellResponse = await fetch(spellToRenderFile);
      if (!spellResponse.ok) {
        throw new Error(`Failed to fetch spell data: ${spellResponse.statusText}`);
      }
  
      // 3. Parse JSON with error handling
      const spellToRenderJSON = await spellResponse.text();
      const spellToRenderJSONParsed = JSON5.parse(spellToRenderJSON);
  
      // 4. Extract spell details
      const spellName = spellToRenderJSONParsed['key'];
      const school = spellToRenderJSONParsed['sch'];
      const components = spellToRenderJSONParsed['components'];
      const duration = spellToRenderJSONParsed['duration'];
      const castingTime = spellToRenderJSONParsed['castingTime'];
      const ranks = spellToRenderJSONParsed['ranks'];  // Assuming 'ranks' is the correct key
  
      // 5. Clear existing content (optional)
      spellsRenderSpace.innerHTML = ''; // Clear previous spell details
  
      // 6. Render spell information
      spellsRenderSpace.innerHTML += `<h1>${spellName}</h1>`;
      spellsRenderSpace.innerHTML += `<p><span>School: </span> ${school}</p>`;
      spellsRenderSpace.innerHTML += `<p><span>Componentes: </span> ${components}</p>`;
      spellsRenderSpace.innerHTML += `<p><span>Duracion: </span> ${duration}</p>`;
      spellsRenderSpace.innerHTML += `<p><span>Tiempo de Lanzamiento: </span> ${castingTime}</p>`;
      spellsRenderSpace.innerHTML += `<h2>Rangos</h2>`; // Use "Nivel" for Spanish
  
      // 7. Render ranks (improved loop logic)
      for (const rank of ranks) {
        for (const key in rank) {
          if (rank.hasOwnProperty(key)) { // Check for own properties to avoid prototype issues
            spellsRenderSpace.innerHTML += `<p><span>${key}: </span> ${rank[key]}</p>`;
          }
        }
      }
    } catch (error) {
      console.error('Error rendering spell:', error);
      // Handle errors gracefully (e.g., display an error message to the user)
    }
  }
  
  comfirmSpellButton.addEventListener('click', renderSpell);
  