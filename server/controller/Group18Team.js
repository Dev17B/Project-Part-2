let express = require('express');
let router = express.Router();

module.exports.displayTeamPage = (req, res, next) => {
    res.render('Group18Team', {
        title: 'Gruop 18 Team',
        displayName:req.user ? req.user.displayName:''
    });
}