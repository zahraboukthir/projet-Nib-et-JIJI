const express = require("express");
const productrouter = express.Router();
const isAuth = require('../middlewares/passport')

const validation = require("../middlewares/validation")
const { ajoutProduct, upload} = require("../controllers/productcontrollers");
/**
 * @param POST /ajout
 * @description ajoute une annonce
 * @access PRIVATE
 */
productrouter.post("/add", upload.single('pic'),isAuth(), ajoutProduct);
module.exports = productrouter;