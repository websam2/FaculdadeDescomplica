import { DataTypes } from "sequelize";
import sequelize from "../utils/database";

const Evaluation = sequelize.define(
  "evalutions",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscore: true }
);

export default Evaluation;
