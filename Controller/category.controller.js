const Categories = require("../models/index");
const Category = Categories.category;

exports.Create = function (req, res) {
  const category = {
    name: req.body.name,
    description: req.body.description,
  };

  Category.create(category)
    .then((response) => {
      console.log(`the data with the name ${category.name} has been added`);
      res.status(201).send("DB has been successfully Updated");
    })
    .catch((err) => {
      console.log("some err");
      res.status(500).send("Db hasnt been updated due to:", err);
    });
};

exports.Update = function (req, res) {
  let categoryId = req.params.id;
  const category = {
    name: req.body.name,
    descriptiom: req.body.description,
  };

  Category.update(category, {
    where: {
      id: categoryId,
    },
  })
    .then((response) => {
      console.log(`the data with the name ${category.name} has been updated`);
      res.status(201).send("DB has been successfully Updated");
    })
    .catch((err) => {
      console.log("some err", err);
      res.status(500).send("Db hasnt been updated due to some err");
    });
};
exports.findOne = function (req, res) {
  const categoryId = req.params.id;
  Category.findByPk(categoryId)
    .then((response) => {
      console.log(`this is the data with the id ${categoryId} `);
      res.status(201).send(response);
    })
    .catch((err) => {
      console.log("some err", err);
      res.status(500).send("Db hasnt been updated due to some err", err);
    });
};
exports.FindAll = function (req, res) {
  let categoryName = req.query.name;
  let promise;
  if (categoryName) {
    promise = Category.findAll({
      where: {
        name: categoryName,
      },
    });
  } else {
    promise = Category.findAll();
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
  let categoryId = req.params.id;
  Category.destroy({ where: { id: categoryId } })
    .then((response) => {
      console.log(`the data with the id ${categoryId} has been deleted`);
      res.status(201).send(response);
    })
    .catch((err) => {
      console.log("some err", err);
      res.status(500).send("Db hasnt been updated due to some err", err);
    });
};
