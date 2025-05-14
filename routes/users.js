var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
  {
    name:'iphone 8',
    category:'mobile',
    description:'this is a good phone',
    price:'$12',
    image:'https://th.bing.com/th/id/OIP.KyrBu1s2mkrqDl3Bdo8QtAHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    name:'samsung',
    category:'mobile',
    description:'this is a good phone',
    price:'$17',
    image:'https://th.bing.com/th/id/OIP.YVKqeZn6JCyr4clvDyiQ5AHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    name:'oppo',
    category:'mobile',
    description:'this is a good phone',
    price:'$10',
    image:'https://th.bing.com/th/id/OIP.iFCoEQ53M-3iZiDUcboWGAHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    name:'vivo',
    category:'mobile',
    description:'this is a good phone',
    price:'$11',
    image:'https://th.bing.com/th/id/OIP.Rrap3qBt2FrXnPyTq10KTwHaF6?w=228&h=182&c=7&r=0&o=5&pid=1.7'
  }

  ]
  res.render('index', { products,admin:false });
});

module.exports = router;
