const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');

const router = express.Router();

// Route to get all products
router.route("/products").get(getAllProducts);

// Route to get product by ID
router.route("/product/:id").get(getProductDetails);

// Route to create a new product
router.route("/product/new").post(createProduct);

// Route to update product
router.route("/product/:id").put(updateProduct);


// Route to delete product by ID
router.route("/product/:id").delete(deleteProduct);




module.exports = router;
