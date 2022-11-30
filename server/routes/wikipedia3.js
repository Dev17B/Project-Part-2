let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect witht wikipedia model 

let wikipedia3 = require('../models/wikipedia3');
let wikipediaController3 = require('../controller/wikipedia3');

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

router.get('/', wikipediaController3.displayWikipedia3);


/* add operation 
Get route for displaying the add page  -- create operation */
router.get('/add3',requireAuth, wikipediaController3.displayAddPage3);
/* post route for processing  the add page -- create operation  */
router.post('/add3',requireAuth, wikipediaController3.processAddPage3);

/* edit operation 
Get route for displaying the edit operation -- update operation */
router.get('/edit3/:id',requireAuth, wikipediaController3.displayEditPage3);
/*post route for displaying  the edit operation -- update operation  */
router.post('/edit3/:id',requireAuth, wikipediaController3.processEditPage3);
/* delete operation */
/* Get to perform delete operation -- update Deletion */

router.get('/delete3/:id',requireAuth, wikipediaController3.performDelete3);
/* Get to perform delete operation -- update Deletion */

module.exports=router;
