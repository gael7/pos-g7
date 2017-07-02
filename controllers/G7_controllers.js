var express = require ('express');
var router = express.Router();
var models = require ('../models');

router.get('/api/products', function(req, res){
  console.log("gael");
  models.Product.findAll().then(function(data){
    console.log(data);
    res.json(data);
  }).catch(function(err){
    console.log(err);
  });
});

module.exports=router;
