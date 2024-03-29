const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "temperament",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      temperament: {
        type: DataTypes.STRING,
            allowNull: false,
            unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
