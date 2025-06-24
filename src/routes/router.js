import { Router } from "express";
export const router = Router();
import { invoiceRouter } from "./invoicesRouter";

router.use("/invoice", invoiceRouter);



