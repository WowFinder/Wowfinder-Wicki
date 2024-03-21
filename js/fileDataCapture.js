import JSON5 from 'json5';

export default async  function fileDataCapture(globalSelectedFile) {
  try {
    const response = await fetch(globalSelectedFile);
    const json = await response.text();
    const responseInfoJson = JSON5.parse(json);
    return responseInfoJson;
  } catch (err) {
    console.error("Error reading file:", err);
  }
}