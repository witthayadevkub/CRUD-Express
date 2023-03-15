var express = require('express');
var router = express.Router();
const Product = require('../models/product');

/* GET home page. */
router.get('/', async (req, res, next) => {
 try {
     const product = await Product.find()
     res.json(product)
 }
 catch(err) {
    console.log(err);
 }
});

module.exports = router;

router.post('/', async (req, res, next) => {
  try {
      const NewProduct = await Product.create(req.body)
      res.json(NewProduct)
  }
  catch(err) {
     console.log(err);
  }
 });

 router.get('/:id', async (req, res, next) => {
    try {
        const  getById = await Product.findById(req.params.id)
        res.json(getById)
    }
    catch(err) {
       console.log(err);
    }
   });
 
   router.put('/:id', async (req, res, next) => {
    try {
        const  productupdate = await Product.findByIdAndUpdate(req.params.id,req.body)
        res.json(productupdate)
    }
    catch(err) {
       console.log(err);
    }
   });

   router.delete('/:id', async (req, res, next) => {
    try {
        const  productremove = await Product.findByIdAndDelete(req.params.id)
        res.json(productremove)
    }
    catch(err) {
       console.log(err);
    }
   });
 module.exports = router;