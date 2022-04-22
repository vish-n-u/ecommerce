
module.exports = (Sequelize,sequelize)=>{
const user = sequelize.define('user',{
    id:{
        type : Sequelize.INTEGER,
        primaryKey :true,
        autoIncrement:true
    },
    userName:{
        type : Sequelize.STRING,
        allowNull : false

    },
    Email:{
        type : Sequelize.STRING,
        allowNull : false 
    },
    userPassword:{
        type : Sequelize.STRING,
        allowNull : false
    }
},{tableName:"users"}
)
return user
}