var butterfly = require('../models/butterfly'); 
 
// List of all butterflys 
exports.butterfly_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: butterfly list'); 
}; 
 
// for a specific butterfly. 
exports.butterfly_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: butterfly detail: ' + req.params.id); 
}; 
 
// Handle butterfly create on POST. 
exports.butterfly_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: butterfly create POST'); 
}; 
 
// Handle butterfly delete form on DELETE. 
exports.butterfly_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: butterfly delete DELETE ' + req.params.id); 
}; 
 
// Handle butterfly update form on PUT. 
exports.butterfly_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: butterfly update PUT' + req.params.id); 
}; 