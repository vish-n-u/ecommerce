const db = require("../models/index");
const Create = (req, res) => {
  var obj = {
    userId: req.userId,
  };
  console.log(obj);
  db.cart
    .create(obj)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal server error");
    });
};
const Update = (req, res) => {
  const cartId = req.params.id;

  db.cart.findByPk(cartId).then((cart) => {
    db.products
      .findAll({
        where: {
          name: req.body.products,
        },
      })
      .then((productList) => {
        if (!productList) {
          res.status(400).send({
            message: "added products doesn't exists",
          });
          return;
        }

        cart.setProducts(productList).then(() => {
          let selectedProducts = [];
          let totalCost = 0;
          cart.getProducts().then((products) => {
            for (let i = 0; i < products.length; i++) {
              totalCost = totalCost + products[i].price;
              selectedProducts.push({
                id: products[i].id,
                name: products[i].name,
                cost: products[i].price,
              });
            }
            res.status(200).send({
              id: cart.id,
              selectedProducts: selectedProducts,
              cost: totalCost,
            });
          });
        });
      });
  });
};

const cartController = { Create, Update };
module.exports = cartController;
