
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.js";

class invoices extends Model {};

invoices.init({
  siret_number: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_invoice: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  client_address : {
    type: DataTypes.STRING,
    allowNull: true
  },
  invoice_date: {
    type: DataTypes.DATE,
    allowNull: true
  }, 
  invoice_term : {
    type: DataTypes.DATE,
    allowNull: true
  },
  invoice_number : {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  total : {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  TVA_number : {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, 
{
  sequelize,
  tableName: "invoices"
}
);

export {invoices};