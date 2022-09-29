const categoryController = require("../Controller/category.controller");
const validation = require("../Validation/ValidationCategories.js");
const authValidation = require("../Validation/auth.validation");
module.exports = function (app) {
  app.get("/ecomm/api/v1/categories/:id", categoryController.findOne);
  app.get("/ecomm/api/v1/categories", categoryController.FindAll);

  app.post(
    "/ecomm/api/v1/categories",
    [authValidation.TokenValidation, authValidation.isAdmin],
    categoryController.Create
  );

  app.put(
    "/ecomm/api/v1/categories/:id",
    [authValidation.TokenValidation, authValidation.isAdmin],
    categoryController.Update
  );

  app.delete(
    "/ecomm/api/v1/categories/:id",
    [authValidation.TokenValidation, authValidation.isAdmin],
    categoryController.Delete
  );
};
