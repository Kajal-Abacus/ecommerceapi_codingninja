const { response } = require('express');
const Product = require('../models/product');

// function to show all the products
module.exports.products =async function(req, res){
    try{
        const foundProducts=await Product.find()
        res.send(foundProducts);

    }catch(err){
        console.log(err);

    }

    /*Product.find({}, function(err, foundProducts){
        if(err){
            res.send(err);
        }else{
            res.send(foundProducts);
        }
    });*/
}

// function to create a new product
module.exports.create = async function(req, res){
    const{quantity,name }=req.body;
    console.log(quantity, name);
    if(!quantity || !name){
        res.status(400).send({message:"all fields are required"})
    }
    try{
        const saved = await Product.create({quantity, name})
        if(saved){
            res.status(200).json(saved)
        }else{
            res.status(403).send({message:"product not saved"})
        }

    }catch(err){
        console.log(err);

    }
  /*  const newProduct = new Product({
        name: req.body.name,
        quantity: req.body.quantity
    });
    newProduct.save().then(response => {
        if(!response){
            console.log("error in save");
        }else{
            res.send(response.data);
        }
    });*/
}

// function to delete a product using it's ID
module.exports.delete = async function(req, res){
    
    try {
        console.log("request Product",req.params.productID);
        // Use await to wait for the asynchronous operation to complete
        await Product.deleteOne({_id: req.params.productID});

        // If the deletion is successful, send a success message
        res.send({
            message: "Product deleted"
        });
    } catch (err) {
        // If there's an error, send the error message
        res.status(500).send(err.message);
    }
    /*Product.deleteOne(
        {_id: req.params.productID},
        function(err){
            if(err){
                res.send(err);
            }else{
                res.send({
                    message: "Product deleted"
                });
            }
        });*/
}

// function to update a product's quantity
module.exports.updateQunatity = async function(req, res) {
    try {

        const ID = req.params.productID;

        // Find the product using id
        const quantity = req.params.update_quantity;
        const found = await Product.findById(ID);
        console.log(found);


        if (!found) {
            return res.status(404).send({ message: "Product not found" });
        }

        // Note - To increment the quantity of the product, put a positive value in the query,
        // and to decrement the quantity, put a negative value in the query
        const newQty = parseInt(found.quantity) + parseInt(quantity);

        // Update the product's quantity
        const updatedProduct = await Product.findByIdAndUpdate(
            ID,
            { quantity: newQty },
            { new: true } // Return the modified document
        );

        if (!updatedProduct) {
            return res.status(500).send({ message: "Failed to update product" });
        }

        res.send({
            product: updatedProduct,
            message: 'Updated successfully'
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
/*module.exports.updateQunatity = function(req, res){
    const ID = req.params.productID;
    // find the product using id
    Product.findById(ID, function(err, found){
        if(err){
            res.send(err);
        }else{

            // Note - To increment the quantity of the product put number as a positive value in the query 
            //        and to decrement the quantity put the number as negative value in the query

            const newQty = parseInt(found.quantity) + parseInt(req.query.number);
            // update the product's quantity
            Product.findByIdAndUpdate(ID, {quantity: newQty}, function(err, updatedProduct){
                if(err){
                    res.send(err);
                }else{
                    updatedProduct.quantity = newQty;
                    res.send({
                        product: updatedProduct,
                        message: 'updated successfully'
                    });
                }
            });
        }
    });
}*/