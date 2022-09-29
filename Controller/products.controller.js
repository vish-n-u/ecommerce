const db = require("../models/index");

const Product = db.products;
// Create and Save a New Product
exports.Create = function (req, res) {
  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    CategoryId: req.body.categoryId,
  };

  Product.create(product)
    .then((response) => {
      console.log(`the data with the name ${product.name} has been added`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("some err", err);
      res.status(400).send("Db hasnt been updated due to:", err);
    });
};

//updating product
exports.Update = function (req, res) {
  let productId = req.params.id;

  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };
  Product.update(product, {
    where: {
      id: productId,
    },
  })
    .then((response) => {
      console.log(`the data with the name ${product.name} has been updated`);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("some err", err);
      res.status(500).send("Db hasnt been updated due to some err");
    });
};
exports.findOne = function (req, res) {
  const productId = req.params.id;
  Product.findByPk(productId)
    .then((response) => {
      console.log(`this is the data with the id ${productId} `);
      res.sendStatus(201).send(response);
    })
    .catch((err) => {
      console.log("some err", err);
      res.status(500).send("Db hasnt been updated due to some err", err);
    });
};
exports.FindAll = function (req, res) {
  let productName = req.query.name;
  let promise;
  if (productName) {
    promise = Product.findAll({
      where: {
        name: productName,
      },
    });
  } else {
    promise = Product.findAll();
  }
  promise
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((err) => {
      console.log("some err", err);
      res.status(500).send("Db hasnt been updated due to some err", err);
    });
};
exports.Delete = function (req, res) {
  let productId = req.params.id;
  Product.destroy({ where: { id: productId } })
    .then((response) => {
      console.log(`the data with the id ${productId} has been deleted`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("some err", err);
      res.sendStatus(500);
    });
};
exports.getByCategory = function (req, res) {
  Product.findAll({
    where: {
      CategoryId: req.params.categoryId,
    },
  })
    .then((response) => {
      console.log(`the data's with the categoryid ${req.params.categoryId} `);
      res.status(201).send(response);
    })
    .catch((err) => {
      console.log("some err", err);
      res.sendStatus(500);
    });
};
