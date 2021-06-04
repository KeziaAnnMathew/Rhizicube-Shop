const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@cluster0.hi5x9.mongodb.net/productdetails?retryWrites=true&w=majority');
const Schema= mongoose.Schema;


const ProductSchema = new Schema({
    productname:String,
    SKU:String,
    productcategory:String,
    productprice:Number,
    productimage:String,
    productdescription:String,
    productrating:Number,
    producttotalbought:Number,
    productreviews:Number
});

var Productdata = mongoose.model('productdata', ProductSchema);

module.exports = Productdata;