const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dogs",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      imagen: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      height_min:{
        type: DataTypes.TEXT,
        allowNull: false
      },

      height_max:{
        type: DataTypes.TEXT,
        allowNull: false
      },

      weight_min:{
        type: DataTypes.TEXT,
        allowNull: false
      },
     
      weight_max:{
        type: DataTypes.TEXT,
        allowNull: false
      },
      
      years:{
        type: DataTypes.STRING,
        allowNull: true
      },

    },
    {
      timestamps: false,
    }
  );
};
