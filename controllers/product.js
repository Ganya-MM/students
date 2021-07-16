// const productCollection = [];

// exports.getAddProductForm = (req, res, next) => {
//     res.render('index')
// }

// exports.addProduct = (req, res, nex) => {
//     productCollection.push(req.body);
//     res.render('last-file')
// } 

const Product = require("../models/product");
const repo = require("../dbrepos/productRepo")

exports.getAddProductForm = (req, res ) => {
    res.render('index');
}

exports.addProduct = (req, res ) => {
    const product = new Product(req.body.name,req.body.contact,req.body.subjects,req.body.classs,req.body.society,req.body.year);
    repo.add(product);
    // product.save();
    res.render('last-file',{products: Product.getAll()})
}


