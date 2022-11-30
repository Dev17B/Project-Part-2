let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect witht wikipedia model 

let wikipedia = require('../models/wikipedia');
let wikipediaController = require('../controller/wikipedia');

function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
/* read operation 
get route for the wikipedia list*/

router.get('/',wikipediaController.displayWikipedia);


/* add operation 
Get route for displaying the add page  -- create operation */
router.get('/add',requireAuth,wikipediaController.displayAddPage);
/* post route for processing  the add page -- create operation  */
router.post('/add',requireAuth,wikipediaController.processAddPage);

/* edit operation 
Get route for displaying the edit operation -- update operation */
router.get('/edit/:id',requireAuth,wikipediaController.displayEditPage);
/*post route for displaying  the edit operation -- update operation  */
router.post('/edit/:id',requireAuth,wikipediaController.processEditPage);
/* delete operation */
/* Get to perform delete operation -- update Deletion */

router.get('/delete/:id',requireAuth,wikipediaController.performDelete);
/* Get to perform delete operation -- update Deletion */

module.exports=router;
