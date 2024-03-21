import React, { useState, useEffect } from "react";
import fileDataCapture from "../../js/fileDataCapture";




function SelectionFileDataDisplay({ selectedFilePath }) {
    const [selectedFile, setSelectedFile] = useState("Cargando...");

    useEffect(() => {
        fileDataCapture(selectedFilePath).then(data => {
            setSelectedFile(data);
        });
    }, [selectedFilePath]);

    return (
        <div>
            {selectedFile !== "Cargando..." && (
                <h1>{selectedFile.key}</h1> 
                //todo: add the rest of the parameters of the file
            )}
        </div>
    );
}



function OptionsListToSelect({ optionsListEntry }) {
    let optionList = optionsListEntry;
    return (
        <>
            {optionList.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </>
    );
}
function OptionListContainerToSelect({optionsListEntry, pathSelectFile, idName }) {
    const [selectedOptionNameFile, setSelectedOptionNameFile] = useState("barbarian");
    const handleSelectOptionNameFileChange = (e) => {
        setSelectedOptionNameFile(e.target.value);
    };
    console.log(optionsListEntry);
    console.log(selectedOptionNameFile);
    console.log(pathSelectFile);
    const selectedFile = `${pathSelectFile}${selectedOptionNameFile}.json5`;
    console.log(selectedFile);
    
        return(
        <>
        <select className="selectPage" name={idName} id={idName}
           value={selectedOptionNameFile} 
           onChange={handleSelectOptionNameFileChange}
           >
            <OptionsListToSelect optionsListEntry={optionsListEntry} />
        </select>
       <SelectionFileDataDisplay selectedFilePath={selectedFile} />
        </>
    );
}


export default OptionListContainerToSelect;