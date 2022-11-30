let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect witht wikipedia model 

let wikipedia2 = require('../models/wikipedia2');
let wikipediaController2 = require('../controller/wikipedia2');

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

router.get('/',wikipediaController2.displayWikipedia2);


/* add operation 
Get route for displaying the add page  -- create operation */
router.get('/add2',requireAuth, wikipediaController2.displayAddPage2);
/* post route for processing  the add page -- create operation  */
router.post('/add2',requireAuth, wikipediaController2.processAddPage2);

/* edit operation 
Get route for displaying the edit operation -- update operation */
router.get('/edit2/:id',requireAuth, wikipediaController2.displayEditPage2);
/*post route for displaying  the edit operation -- update operation  */
router.post('/edit2/:id',requireAuth, wikipediaController2.processEditPage2);
/* delete operation */
/* Get to perform delete operation -- update Deletion */

router.get('/delete2/:id',requireAuth, wikipediaController2.performDelete2);
/* Get to perform delete operation -- update Deletion */

module.exports=router;
