import React, { useState, useEffect } from "react";
import '/css/estilos.css';

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

function Select({idName, nameLista}) {
    const [selected, setSelected] = useState("");
    const handleSelectChange = (e) => {
        setSelected(e.target.value);
    };
    console.log(nameLista);
    console.log(selected);
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