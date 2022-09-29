module.exports = (Sequelize, sequelize) => {
  role = sequelize.define(
    "role",
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
    },
    { tableName: "roles" }
  );
  return role;
};
