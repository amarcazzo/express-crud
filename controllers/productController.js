const product = require("../models/product");

exports.getProducts = (req, res) => {
  product.find((err, products) => {
    if (err) return res.send(err);

    res.send(products);
  });
};

exports.getProduct = (req, res) => {
  product.find({ _id: req.params.id }, (err, product) => {
    if (err) return res.send(err);

    res.send(product);
  });
};

exports.createProduct = (req, res) => {
  let newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity
  };

  product.create(newProduct, (err, product) => {
    if (err) return res.send(err);

    res.send(product);
  });
};

exports.updateProduct = (req, res) => {
  product.update({ _id: req.params.id }, { ...req.body }, (err, affected) => {
    if (err) return res.send(res);

    res.send(affected);
  });
};

exports.deleteProduct = (req, res) => {
  product.remove({ _id: req.params.id }, err => {
    if (err) return res.send(err);

    res.send(req.params.id);
  });
};
