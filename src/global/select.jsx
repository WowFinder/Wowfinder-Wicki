import React, { useState, useEffect } from "react";
import '/css/estilos.css';
import RenderSelect from '/js/renderSelect.js'

function Options({ nameLista }) {
    let lista = nameLista
    return (
        <>
            {lista.map((item, index) => (
                <option key={index} value={item}>
                    {item}
                </option>
            ))}
        </>
    );
}
function Select({fileName, idName, nameLista}) {
    const [selected, setSelected] = useState("");
    const handleSelectChange = (e) => {
        setSelected(e.target.value);
    };
    console.log(nameLista);
    console.log(selected);
    console.log(fileName)
    const fileClass = fileName+selected+'.json5'
    console.log(fileClass)
    return (
    <>
        <select className="selectPage" name={idName} id={idName}
           value={selected} 
           onChange={handleSelectChange}
           >
            <Options nameLista={nameLista} />
        </select>
    </>
    );
}

export default Select;