import { extractMetadata } from "../utils/extractMetadata"

const invoiceController = {
  invoice : async (req, res, next) => {
  const metadata = await extractMetadata();
  }
}