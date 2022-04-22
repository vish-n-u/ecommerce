//const { Sequelize } = require("sequelize/types");
module.exports = (Sequelize,sequelize)=>{
    const product = sequelize.define("Product",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name:{
            type: Sequelize.STRING,
            allowNull : false
        },
        description:{
            type : Sequelize.STRING,
            allowNull :true
        },
        price:{
            type : Sequelize.INTEGER,
            allowNull : false
        }
    },{tableName:'Products'})
    return product
};