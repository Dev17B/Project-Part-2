let express = require('express');
const passport = require('passport');
let router = express.Router();

let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {
        title: 'Home',
        displayName:req.user ? req.user.displayName:'' 
    });
}

module.exports.displayLoginPage = (req, res, next) => {
    if (!req.user)
    {
        res.render('auth/login',
        {
            title:'Login',
            message: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName:''
        })
    }
    else
    {
        return res.redirect('/')
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',(err,user,info)=>
    {
        //server error
        if(err)
        {
            return next(err);
        }
        // if login error
        if(!user)
        {
            req.flash('loginMessage',
            'AuthenticationError');
            return res.redirect('/login');
        }
        req.login(user,(err) => {
            if(err)
            {
                return next(err)
            }
            return res.redirect('/');
        })
    }) (req,res,next)
}

module.exports.displayRegisterPage = (req, res, next) => {
    if(!req.user)
    {
        res.render('auth/register',
        {
            title:'Register',
            message: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName:''
        })
    }
    else
    {
        return res.redirect('/')
    }
}
module.exports.processRegisterPage = (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password,
        email:req.body.email,
        displayName:req.body.displayName
    })
    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Insertiong the new user");
            if(err.name=="UserExistsError")
                {
                    req.flash('registerMessage',
                    'Registration Error: Uer Already Exists');   
                }
            return res.render('auth/register',
            {
                title:'Register',
                message: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName:''
            });
        }
        else
        {
            // if registration is not successful
            return passport.authenticate('local')(req,res,() =>{
                res.redirect('/');
            })
        }
    })
}

module.exports.performLogout = (req, res, next) => 
{
    req.logout(function(err){
        if (err){
            return next(err);
        }
    })
    res.redirect('/');
}