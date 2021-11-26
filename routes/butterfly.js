var express = require('express');
const butterfly_controlers= require('../controllers/butterfly');
var router = express.Router();

const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

/* GET butterfly */ 
router.get('/', butterfly_controlers.butterfly_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('butterfly', { title: 'Search Results butterfly' });
});

/* GET detail butterfly page */
router.get('/detail', butterfly_controlers.butterfly_view_one_Page);

/* GET create butterfly page */
router.get('/create', butterfly_controlers.butterfly_create_Page);

/* GET create update page */
router.get('/update',secured,butterfly_controlers.butterfly_update_Page);

/* GET create butterfly page */
router.get('/delete', butterfly_controlers.butterfly_delete_Page);


module.exports = router;