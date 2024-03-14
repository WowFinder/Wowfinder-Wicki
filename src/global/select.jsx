import React, { useState, useEffect } from "react";
import '/css/estilos.css';

function Options({ nameLista }) {
    let lista = nameLista;
    return (
        <select>
            {lista.map((item, index) => (
                <option key={index} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}

function Select({idName, nameLista}) {
    const [selected, setSelected] = useState("");
    const handleSelectChange = (e) => {
        setSelected(e.target.value);
    };
    return (
        <>
           <select name={idName} id={idName}
           value={selected} 
           onChange={handleSelectChange}
           ></select>
            <Options nameLista={nameLista} />
        </>
    );
}