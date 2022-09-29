db = require("../models/index");
jwt = require("jsonwebtoken");
secretKey = "SecretKey";
const bcrypt = require("bcrypt");

exports.create = (req, res, next) => {
  if (req.body.name) {
    db.user
      .findOne({
        where: {
          userName: req.body.name,
        },
      })
      .then((response) => {
        if (response) {
          return res.status(404).send("User With Username Exists");
        } else {
          if (req.body.email)
            db.user
              .findOne({
                where: {
                  Email: req.body.email,
                },
              })
              .then((response) => {
                if (response) {
                  return res.status(404).send("User With email already Exists");
                } else {
                  next();
                }
              })
              .catch((err) => {
                res.status(500).send(err);
              });
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(400).send("You have to provide a username");
  }
};
exports.login = (req, res, next) => {
  if (req.body.name) {
    db.user
      .findOne({
        where: {
          userName: req.body.name,
        },
      })
      .then((response) => {
        if (!response) {
          return res
            .status(404)
            .send(`User With ${req.body.name} doesnt Exists`);
        } else {
          if (response.Email != req.body.email) {
            return res.status(404).send("Wrong Email provided");
          } else {
            next();
          }
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(400).send("You have to provide a username");
  }
};
exports.role = (req, res, next) => {
  values = ["Buyer", "Seller", "Admin"];
  if (req.body.role) {
    for (let x = 0; x < req.body.role.length; x++) {
      if (values.includes(req.body.role[x])) {
        continue;
      } else {
        res.status(400).send("No such role");
        return;
      }
    }
    next();
  } else {
    next();
  }
};
exports.TokenValidation = (req, res, next) => {
  let verifyToken = req.headers["x-access-token"];
  console.log(verifyToken);
  if (!verifyToken) {
    res.status(404).send("No token is provided");
  }
  jwt.verify(verifyToken, secretKey, (err, decoded) => {
    if (err) {
      res.status(404).send("Token incorrect");
    } else {
      req.userId = decoded.id;
      next();
    }
  });
};
exports.isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      console.log(roles);
      for (x = 0; x < roles.length; x++) {
        if (roles[x].name == "Admin") {
          next();
          return;
        }
      }
      res.send("You are not an Admin");
      return;
    });
  });
};
