const authValidation = require("../Validation/auth.validation");
const cartController = require("../Controller/cart.controller");
const cartValidation = require("../Validation/cartValidation");
module.exports = (app) => {
  app.post(
    "/ecomm/api/v1/cart",
    [authValidation.TokenValidation],
    cartController.Create
  );
  app.put(
    "/ecomm/api/v1/cart/:id",
    [authValidation.TokenValidation, cartValidation.productValidation],
    cartController.Update
  );
};
