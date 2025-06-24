import { Router } from "express";
export const invoiceRouter = Router();
import { invoiceController } from "../controllers/invoiceController.js";
import { catchErrors } from "../middleware/catchErrrors.js";

invoiceRouter.post("/upload", catchErrors(invoiceController.extractInvoiceMetadata));