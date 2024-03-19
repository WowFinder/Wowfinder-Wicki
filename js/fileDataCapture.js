import JSON5 from 'json5';

export default async function fileDataCapture(selectedFile) {
  try {
    const response = await fetch(selectedFile);
    const json = await response.text();
    const responseInfoJson = JSON5.parse(json);
    console.log(responseInfoJson);
    return {...responseInfoJson};
  } catch (err) {
    console.error("Error reading file:", err);
  }
}