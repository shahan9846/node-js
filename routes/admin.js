var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers');
const { log } = require('handlebars');
/* GET users listing. */
router.get('/', function (req, res, next) {
  productHelpers.getAllProducts().then((products) => {
    console.log(products);
    res.render('admin/view-products', { products, admin: true });

  })

});
router.get('/add-product', function (req, res) {
  res.render('admin/add-product')
})
router.post('/add-product', (req, res) => {
  console.log(req.body)
  console.log(req.files.image)

  productHelpers.addProduct(req.body, (insertedId) => {
    let image = req.files.image
    console.log(insertedId)
    image.mv('./public/product-images/' + insertedId + '.jpg', (err, done) => {
      if (!err) {
        res.render('admin/add-product')
      } else {
        console.log(err)
      }

    })

  })
})

module.exports = router;
