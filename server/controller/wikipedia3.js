let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect witht wikipedia model 
let Wikipedia3 = require('../models/wikipedia3');

module.exports.displayWikipedia3 = (req,res,next)=>{
    Wikipedia3.find((err, wikipedia3)=>{
        if (err)
        {
            return console.error(err);
        }
        else
        {
            res.render('wikipedia3/list3',
            {
                title:'Mexico missions', 
                Wikipedia3: wikipedia3,
                displayName:req.user ? req.user.displayName:'' 
            })
        }
    });
}

module.exports.displayAddPage3 = (req,res,next)=>{
    res.render('wikipedia3/add3',{
        title:'Add the informaiton you like to add',
        displayName:req.user ? req.user.displayName:'' 
    })

}

module.exports.processAddPage3 = (req,res,next)=>{
    let newWikipedia3 = Wikipedia3 ({
        "missionname3": req.body.missionname3,
        "date3": req.body.date3,
        "leader3": req.body.leader3,
        "description3": req.body.description3
    })
    Wikipedia3.create(newWikipedia3,(err,Wikipedia3) => {
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.redirect('/wikipedia3');
        }
    })
    
}

module.exports.displayEditPage3 = (req,res,next)=> {
    let id = req.params.id;
    Wikipedia3.findById(id,(err,wikipedia3ToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.render('wikipedia3/edit3',{title:'Edit the mission information', 
            wikipedia3:wikipedia3ToEdit,
            displayName:req.user ? req.user.displayName:'' 
        });
        }
    });
}

module.exports.processEditPage3 = (req,res,next)=> {
    let id=req.params.id;
    let updateWikipedia3 = Wikipedia3 ({
        "_id":id,
        "missionname3": req.body.missionname3,
        "date3": req.body.date3,
        "leader3": req.body.leader3,
        "description3": req.body.description3
    });
    Wikipedia3.updateOne({_id:id}, updateWikipedia3,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/wikipedia3');
        }
    });
}

module.exports.performDelete3 = (req,res,next)=>{
    let id =req.params.id;
    Wikipedia3.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/wikipedia3');
        }
    });
}
