const butterfly = require('../models/butterfly');


 
// List of all butterflys 
exports.butterfly_list = async function(req, res) { 

   thebutterflys = await butterfly.find(); 
    res.send(thebutterflys); 
}; 
 
// for a specific butterfly. 
exports.butterfly_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await butterfly.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    }  
}; 
 
// Handle butterfly create on POST. 
exports.butterfly_create_post =  async function(req, res) { 
    console.log(req.body) 
     let document = new butterfly(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"butterfly_type":"goat", "cost":12, "size":"large"} 
    document.Size = req.body.Size; 
    document.color = req.body.color; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }  
}; 
 
// Handle butterfly delete form on DELETE. 
exports.butterfly_delete =  async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await butterfly.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle butterfly update form on PUT. 
exports.butterfly_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
//  ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await butterfly.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Size)toUpdate.Size = req.body.Size; 
        if(req.body.color)toUpdate.color = req.body.color; 
        if(req.body.price)toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// List of all butterflys 
exports.butterfly_view_all_Page = async function(req, res) { 
    try{ 
        thebutterflys = await butterfly.find(); 
        res.render('butterfly', { title: 'butterfly Search Results', results: thebutterflys }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 