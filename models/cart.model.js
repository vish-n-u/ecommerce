module.exports = function (Sequelize, sequelize) {
  const carts = sequelize.define(
    "cart",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Total: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    },
    { tableName: "carts" }
  );
  return carts;
};
