const Product = require('../db/models/product'),
  mongoose = require('mongoose');

//ANCHOR CREATE PRODUCT  .CREATEPRODUCT
exports.createProduct = async (req, res) => {
  try {
    const product = await new Product(req.body);
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR GET A SPECIFIC PRODUCT .GETSPECIFICPRODUCT
exports.getSpecificProduct = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({
      message: 'Uh Oh, Not a valid id'
    });
  try {
    const product = await Product.findOne({
      _id
    });
    if (!product)
      return res.status(400).json({
        message: 'Uh Oh! Product not Found, double check your spelling!'
      });
    await product.populate('ingredients').execPopulate();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

//ANCHOR GET ALL PRODUCTS .getAllProducts///////////

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(req.query).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR UPDATE A SPECIFIC PRODUCT /////
exports.updateProduct = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const product = await Product.findOne({
      _id: req.params.id
    });
    if (!product)
      return res.status(404).json({ message: 'Uh Oh! :( Product Not Found' });
    updates.forEach((update) => (product[update] = req.body[update]));
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json('Error: ' + err);
  }
};

//ANCHOR DELETE A SPECIFIC PRODUCT /////
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete({
      _id: req.params.id
    });
    if (!product)
      return res.status(404).json({ message: 'Uh Oh! :( Product Not Found' });
    res.status(200).json({ message: 'Product has been Deleted!' });
  } catch (error) {
    res.status(400).json('Error' + err);
  }
};
