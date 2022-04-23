const Sequelize = require ('sequelize')
const dbConfig = require("../CONFIG/config.json")
process.env['NODE_ENV'] = 'production'

env = process.env.Node_ENV||"backend"
const dbSetting = dbConfig[env]
const sequelize = new Sequelize(
    dbSetting.database,
    dbSetting.username,
    dbSetting.password,
    dbSetting.dialectInformation
)

db ={
    Sequelize,
    sequelize
} 
db.category = require("./Category.models.js")(Sequelize,sequelize)
db.products = require("./Product.models.js")(Sequelize,sequelize)
db.user = require("./user.models")(Sequelize,sequelize)
db.role = require("./role.model")(Sequelize,sequelize)
db.cart = require("./cart.model")(Sequelize,sequelize)
db.role.belongsToMany(db.user,{
    through:"user_roles",
    foreignKey:"roleId",
    otherKey:"userId"
})
db.user.belongsToMany(db.role,{
    through:"user_roles",
    foreignKey:"userId",
    otherKey:"roleId"
})
db.cart.belongsToMany(db.products,{
    through:"cart_products"
})
db.products.belongsToMany(db.cart,{
    through:"cart_products"
})

db.user.hasMany(db.cart)
module.exports = db
