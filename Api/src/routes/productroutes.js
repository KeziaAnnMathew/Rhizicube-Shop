const express = require('express');
const productRouter=express.Router();
const productdata= require('../models/productdata')
function router(){

    productRouter.post('/addproduct',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        var product= {
            productname:req.body.item.productname,
            SKU:req.body.item.SKU,
            productcategory:req.body.item.productcategory,
            productprice:req.body.item.productprice,
            productimage:req.body.item.productimage,
            productdescription:req.body.item.productdescription,
            productrating:req.body.item.productrating,
            producttotalbought:req.body.item.producttotalbought,
            productreviews:req.body.item.productreviews
        }
        var productItem= productdata(product);
        productItem.save();
    });

    productRouter.get('/getproducts',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        productdata.find()
        .then(function(products){
            res.send(products)
        })
        
    });
   return productRouter;
}

module.exports = router;