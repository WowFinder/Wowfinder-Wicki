import React, { useState } from "react";


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
    const [selectedOptionNameFile, setSelectedOptionNameFile] = useState("");
    const handleSelectOptionNameFileChange = (e) => {
        setSelectedOptionNameFile(e.target.value);
    };
    console.log(optionsListEntry);
    console.log(selectedOptionNameFile);
    console.log(pathSelectFile)
    const selectedFile = `${pathSelectFile}${selectedOptionNameFile}.json5`
    console.log(selectedFile)
    return (
        <select className="selectPage" name={idName} id={idName}
           value={selectedOptionNameFile} 
           onChange={handleSelectOptionNameFileChange} >
            <OptionsListToSelect optionsListEntry={optionsListEntry} />
        </select>
    );
}

export default OptionListContainerToSelect;