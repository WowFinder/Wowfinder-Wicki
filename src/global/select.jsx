import React, { useState, useEffect } from "react";
import '/css/estilos.css';
import RenderSelect from '/js/renderSelect.js'

let fileName;
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
function Select({idName, nameLista, fileDirectory}) {
    const [selected, setSelected] = useState("");
    const handleSelectChange = (e) => {
        setSelected(e.target.value);
    };
    console.log(nameLista);
    console.log(selected);
    fileName= fileDirectory+selected+'.json5';
    console.log(fileName);
    RenderSelect(fileName)
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