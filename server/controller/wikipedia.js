let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect witht wikipedia model 
let Wikipedia = require('../models/wikipedia');

module.exports.displayWikipedia = (req,res,next)=>{
    Wikipedia.find((err, wikipedia)=>{
        if (err)
        {
            return console.error(err);
        }
        else
        {
            res.render('wikipedia/list',
            {
                title:'USA missions', 
                Wikipedia: wikipedia,
                displayName:req.user ? req.user.displayName:'' 

            })
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('wikipedia/add',{
        title:'Add the informaiton you like to add',
        displayName:req.user ? req.user.displayName:'' 
    })

}

module.exports.processAddPage = (req,res,next)=>{
    let newWikipedia = Wikipedia ({
        "missionname": req.body.missionname,
        "date": req.body.date,
        "leader": req.body.leader,
        "description": req.body.description
    })
    Wikipedia.create(newWikipedia,(err,Wikipedia) => {
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.redirect('/wikipedia');
        }
    })
    
}

module.exports.displayEditPage = (req,res,next)=> {
    let id = req.params.id;
    Wikipedia.findById(id,(err,wikipediaToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.render('wikipedia/edit',{title:'Edit the mission information',
            wikipedia:wikipediaToEdit,
            displayName:req.user ? req.user.displayName:''
        });
        }
    });
}

module.exports.processEditPage = (req,res,next)=> {
    let id=req.params.id;
    let updateWikipedia = Wikipedia ({
        "_id":id,
        "missionname": req.body.missionname,
        "date": req.body.date,
        "leader": req.body.leader,
        "description": req.body.description
    });
    Wikipedia.updateOne({_id:id}, updateWikipedia,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/wikipedia');
        }
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id =req.params.id;
    Wikipedia.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/wikipedia');
        }
    });
}
