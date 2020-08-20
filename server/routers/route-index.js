"use strict";

const { response } = require("express");
let baseUrl = "/api/v1";
module.exports = function (app) {
  let userController = require("../models/user");
  let catalogController = require("../models/catalog");
  let productController = require("../models/products");

  app
    .route(baseUrl + "/user")
      .get(userController.getAllUser)
      .post(userController.addOneUser);

  app
    .route(baseUrl + "/user/:id")
      .get(userController.getUserById)
      .put(userController.editUserById)
      .delete(userController.deleteUserById);

  app.route(baseUrl + "/catalog").get(catalogController.getAll);

  app.route(baseUrl + "/catalogMenu").get(catalogController.getMainCatalog);

  app.route(baseUrl + "/getNewProducts").get(productController.getNewProducts);

  app
    .route(baseUrl + "/getSaleProducts")
    .get(productController.getSaleProducts);
};
