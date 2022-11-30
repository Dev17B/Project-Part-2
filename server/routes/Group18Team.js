let express = require('express');
let router = express.Router();
let Group18TeamController = require('../controller/Group18Team');

function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET home page. */
router.get('/', Group18TeamController.displayTeamPage);

router.get('/Group18Team',requireAuth,Group18TeamController.displayTeamPage);


module.exports = router;
