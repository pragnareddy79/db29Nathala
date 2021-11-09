var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var butterfly_controller = require('../controllers/butterfly'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// butterfly ROUTES /// 
 
// POST request for creating a butterfly.  
router.post('/resource/butterflys', butterfly_controller.butterfly_create_post); 
 
// DELETE request to delete butterfly. 
router.delete('/resource/butterflys/:id', butterfly_controller.butterfly_delete); 
 
// PUT request to update butterfly. 
router.put('/resource/butterflys/:id', 
butterfly_controller.butterfly_update_put); 
 
// GET request for one butterfly. 
router.get('/resource/butterflys/:id', butterfly_controller.butterfly_detail); 
 
// GET request for list of all butterfly items. 
router.get('/resource/butterflys', butterfly_controller.butterfly_list); 
 
module.exports = router; 