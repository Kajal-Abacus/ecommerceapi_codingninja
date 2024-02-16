const express = require('express');
const router = express.Router();

const Product = require('../models/product');

// initializing products controller
const productsController = require('../controllers/products_controller');

// to get all the products
router.get('/', productsController.products);

// to create a product
router.post('/create', productsController.create);

// to delete a product using it's ID
//router.delete('/:productID', productsController.delete);
router.delete('/:productID', async function (req, res) {
    console.log("Product ID:", req.params.productID);
    
    try {
        await Product.deleteOne({ _id: req.params.productID});
        res.send({
            message: "Product deleted"
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// to update the quantity of a product
router.post('/:productID/:update_quantity/', productsController.updateQunatity);

module.exports = router;