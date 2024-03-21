import React, { useState, useEffect } from "react";
import fileDataCapture from "../../js/fileDataCapture";




function SelectionFileDataDisplay({ selectedFilePath, optionsListEntry, fileKeywordList,  }) {
    //TODO add keyword to show data from the file
    //TODO: add the rest of the parameters of the file
    const [selectedFile, setSelectedFile] = useState("Cargando...");

    useEffect(() => {
        fileDataCapture(selectedFilePath).then(data => {
            setSelectedFile(data);
        });
    }, [selectedFilePath]);
    const keyFile = selectedFile[fileKeywordList[0]];

    
    return (
        <div key={"fileDisplay"}>
            {optionsListEntry.map((item) => (
                    Object.entries(item).map(([key]) => (
                selectedFile !== "Cargando..." && (
                        keyFile==item[key] && (
                <h1>{`${key}`}</h1>
                ))))))}
            {/*TODO Find common elements across files to apply automatic logic*/}
        </div>
    );
}



function OptionsListToSelect({ optionsListEntry }) {
    let optionList = optionsListEntry;
    return (
        <>
            {optionList.map((item) => (
                Object.entries(item).map(([key]) => (
                <option key={item[key]} value={item[key]}>
                    {`${key}`}
                </option>
            ))))}
        </>
    );
}
function OptionListContainerToSelect({optionsListEntry, pathSelectFile, idName, fileKeywordList }) {
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
       <SelectionFileDataDisplay selectedFilePath={selectedFile} optionsListEntry={optionsListEntry} fileKeywordList={fileKeywordList} />
        </>
    );
}


export default OptionListContainerToSelect;