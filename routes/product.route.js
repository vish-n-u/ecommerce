const productController = require("../Controller/products.controller.js");
const categoryController = require("../Controller/category.controller");
const productValidation = require("../Validation/ValidationProduct");
const authValidation = require("../Validation/auth.validation");

module.exports = function (app) {
  app.get("/ecomm/api/v1/products/:id", productController.findOne);
  app.get("/ecomm/api/v1/products", productController.FindAll);
  app.post(
    "/ecomm/api/v1/categories",
    [
      authValidation.TokenValidation,
      authValidation.isAdmin,
      productValidation.name1,
      productValidation.price,
    ],
    productController.Create
  );

  app.put("/ecomm/api/v1/products/:id", productController.Update);

  app.delete(
    "/ecomm/api/v1/products/:id",
    [
      authValidation.TokenValidation,
      authValidation.isAdmin,
      productValidation.productID,
    ],
    productController.Delete
  );
  app.get(
    "/ecomm/api/v1/category/products/:categoryId",
    productController.getByCategory
  );
  //
};
