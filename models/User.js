import { DataTypes } from "sequelize";
import sequelize from "../utils/database";

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    fist_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {},
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  { underscore: true }
);

export default User;
