import Select from "../src/global/select.jsx";
import JSON5 from 'json5';


export default async function Stats(fileDirectory) {
    try{
        const response = await fetch(fileDirectory);
        const json = await response.text();
        const ListJSON = JSON5.parse(json);
        console.log(ListJSON)
        return {...ListJSON.stats};
    }catch (err) {
        console.error("Error reading file:", err);
    }
}
