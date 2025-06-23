import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.js";

class receipts extends Model {};

receipts.init({
  is_recept : {
    type: DataTypes.STRING,
    allowNull: true
  },
  brand_name : {
    type : DataTypes.STRING,
    allowNull: true
  }, 
  receipt_number : {
    type : DataTypes.STRING,
    allowNull: true
  },
  total : {
    type : DataTypes.INTEGER,
    allowNull: true
  }
},
  {
    sequelize,
    tableName : "receipts"
  }
);

export {receipts};