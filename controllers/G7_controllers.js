var express = require ('express');
var router = express.Router();
var models = require ('../models');

//Product routes
router.get('/api/products', function(req, res){
  console.log("category");
  models.Product.findAll().then(function(data){
    console.log(data);
    res.json(data);
  }).catch(function(err){
    console.log(err);
  });
});

router.get('/api/products/:category', function(req, res){
  console.log("category");
  var categoryID = parseInt(req.params.category);
  models.Product.findAll({where: {categoryId: categoryID }}).then(function(data){
    console.log(data);
    res.json(data);
  }).catch(function(err){
    console.log(err);
  });
});

//Category routes
router.get('/api/categories', function(req, res){
  console.log("category");
  models.Category.findAll().then(function(data){
    console.log(data);
    res.json(data);
  }).catch(function(err){
    console.log(err);
  });
});

module.exports=router;
