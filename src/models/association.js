import { invoices } from "./invoices.js";
import { invoice_details } from "./invoicesDetails.js";
import { receipts } from "./receipts.js";
import { Sequelize } from "sequelize";

invoices.hasMany(invoice_details,{
  as: "invoices_details",
  foreignKey: "invoice_id"
});

invoice_details.belongsTo(invoices, {
  as: "invoices"
});

export {invoices, invoice_details, receipts, Sequelize};