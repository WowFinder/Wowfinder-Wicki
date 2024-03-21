import React, { useState, useEffect } from "react";
import fileDataCapture from "../../js/fileDataCapture";




function SelectionFileDataDisplay({ selectedFilePath }) {
    //TODO add keyword to show data from the file
    //TODO: add the rest of the parameters of the file

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
            )}
        </div>
    );
}



function OptionsListToSelect({ optionsListEntry }) {
    let optionList = optionsListEntry;
    //TODO add logic to relate file name to natural name in an object
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