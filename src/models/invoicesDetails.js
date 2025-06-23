import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.js";
import { invoices } from "./invoices.js";

class invoice_details extends Model {};

invoice_details.init({
  product : {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity : {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  unit_price : {
    type : DataTypes.INTEGER,
    allowNull: true
  },
  invoices_id : {
    type : DataTypes.INTEGER,
    references: {
        model: invoices,
        key: 'id',
      },
  }
},
{
  sequelize,
  tableName: "invoices_details"
});

export {invoice_details};
