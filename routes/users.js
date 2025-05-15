var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers');
var userHelpers = require('../helpers/user-helpers');
const { response } = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  let user = req.session.user
  productHelpers.getAllProducts().then((products) => {
      
      res.render('users/view-products', { products,user });
  
    })
});

router.get('/login',(req,res)=>{
  res.render('users/login')
})

router.get('/signup',(req,res)=>{
  res.render('users/signup')
})

router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req.body).then((respose)=>{
    console.log(respose)
  })
})

router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      res.redirect('/login')
    }
  })
})

router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
