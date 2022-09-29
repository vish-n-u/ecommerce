module.exports = (Sequelize, sequelize) => {
  const category = sequelize.define(
    "Category",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    { tableName: "categories" }
  );
  return category;
};
