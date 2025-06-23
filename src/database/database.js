import Sequelize from "sequelize";

const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: "postgres",
  logging: false,
  define: {
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: false
  }
});

export {sequelize};