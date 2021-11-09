var express = require('express');
var router = express.Router();
const butterfly_controlers= require('../controllers/butterfly');

/* GET butterflys */
router.get('/', butterfly_controlers.butterfly_view_all_Page );
router.post('/butterfly', butterfly_controlers.butterfly_create_post);
module.exports = router;