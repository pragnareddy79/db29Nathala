var express = require('express');
const butterfly_controlers= require('../controllers/butterfly');
var router = express.Router();


/* GET create update page */
router.get('/update', butterfly_controlers.butterfly_update_Page);

module.exports = router;