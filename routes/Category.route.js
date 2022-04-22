const categoryController = require('../Controller/category.controller')
const validation = require("../Validation/ValidationCategories.js")
const authValidation = require("../Validation/auth.validation")
module.exports = function(app){
    //for GET
    app.get("/ecomm/api/v1/categories/:id",categoryController.findOne)
    app.get("/ecomm/api/v1/categories",categoryController.FindAll)
    //FOR POST
    app.post("/ecomm/api/v1/categories",[authValidation.TokenValidation,authValidation.isAdmin],categoryController.Create)
    //FOR PUT
    app.put("/ecomm/api/v1/categories/:id",[authValidation.TokenValidation,authValidation.isAdmin],categoryController.Update)
    //for DELETE
    app.delete("/ecomm/api/v1/categories/:id",[authValidation.TokenValidation,authValidation.isAdmin],categoryController.Delete)
}
