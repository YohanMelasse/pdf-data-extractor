import { PDFDocument } from 'pdf-lib';
import {fs} from "fs";

const extractMetadata = async (file) => {
  // read current pdf file.
  const document = await fs.readFile(file, (err, data) => {
    // file must be a string.
  if (typeof(file === "string")){
    console.log(data);
  } else if (err) {
    throw err
  }
});

// load pdf with pdf-lib without updating metadata
const pdfDoc = await PDFDocument.load(document, {
  updateMetadata: false
});

  console.log('échance:', pdfDoc.getTitle());
};

export {extractMetadata};