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
        type: DataTypes.TEXT,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      height: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        // validate: {
        //   min: 0,
        //   max: 999,
        // },
      },

      weight: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        // validate: {
        //   min: 0,
        //   max: 999,
        // },

        years: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          // validate: {
          //   min: 0,
          //   max: 100,
          // },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
