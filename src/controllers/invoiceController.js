import { NotFound } from "../utils/customErrors.js";
import { extractMetadata } from "../utils/extractMetadata.js";

const invoiceController = {
  extractInvoiceMetadata : async (req, res, next) => {
    const {file} = req.query;
    const metadata = await extractMetadata(file);
    if (!metadata){
      return next(new NotFound("Les données requêtées ne peuvent pas être extraites."));
    }
    res.json(file);
  }
};

export {invoiceController};