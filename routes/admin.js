var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers');



/* GET users listing. */
router.get('/', function (req, res, next) {
  productHelpers.getAllProducts().then((products) => {

    res.render('admin/view-products', { products, admin: true });

  })

});
router.get('/add-product', function (req, res) {
  res.render('admin/add-product')
})
router.post('/add-product', (req, res) => {


  productHelpers.addProduct(req.body, (insertedId) => {
    let image = req.files.image

    image.mv('./public/product-images/' + insertedId + '.jpg', (err, done) => {
      if (!err) {
        res.render('admin/add-product')
      } else {
        console.log(err)
      }

    })

  })
})

router.get('/delete-product/:id', (req, res) => {
  let proId = req.params.id
  productHelpers.deleteProduct(proId).then((response) => {
    res.redirect('admin/')
  })
})

router.get('/edit-product/:id', async (req, res) => {
  let product = await productHelpers.getProductDetails(req.params.id)
  console.log(product);

  res.render('admin/edit-product', { product })
})

router.post('/edit-product/:id', (req, res) => {
  let insertedId = req.params.id
  productHelpers.updateProduct(req.params.id, req.body).then(() => {
    res.redirect('/admin')
    if (req.files.image) {
      let image = req.files.image
      image.mv('./public/product-images/' + insertedId + '.jpg')
    }
  })
})

module.exports = router;
