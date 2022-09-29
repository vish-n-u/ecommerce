const db = require("../models/index");

function productValidation(req, res, next) {
  var products = req.body.products;
  if (!products) {
    res.status(400).send("You have to provide the products");
    return;
  } else {
    for (let x = 0; x < products.length; x++) {
      db.products
        .findOne({
          where: {
            name: products[x],
          },
        })
        .then((response) => {
          if (!response) {
            console.log(response);
            res.status(400).send("You have provided wrong products");
            return;
          }
        });
    }
    next();
  }
}
const cartValidation = { productValidation };
module.exports = cartValidation;
