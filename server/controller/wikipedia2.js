let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect witht wikipedia model 
let Wikipedia2 = require('../models/wikipedia2');

module.exports.displayWikipedia2 = (req,res,next)=>{
    Wikipedia2.find((err, wikipedia2)=>{
        if (err)
        {
            return console.error(err);
        }
        else
        {
            res.render('wikipedia2/list2',
            {
                title:'England  missions', 
                Wikipedia2: wikipedia2,
                displayName:req.user ? req.user.displayName:'' 

            }) 
           // console.log("wikipedia2" +wikipedia2);
        }
    });
}

module.exports.displayAddPage2 = (req,res,next)=>{
    res.render('wikipedia2/add2',{
        title:'Add the informaiton you like to add',
        displayName:req.user ? req.user.displayName:'' 
    })

}

module.exports.processAddPage2 = (req,res,next)=>{
    let newWikipedia2 = Wikipedia2 ({
        "missionname2": req.body.missionname2,
        "date2": req.body.date2,
        "leader2": req.body.leader2,
        "description2": req.body.description2
    })
    Wikipedia2.create(newWikipedia2,(err,Wikipedia2) => {
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.redirect('/wikipedia2');
        }
    })
    
}

module.exports.displayEditPage2 = (req,res,next)=> {
    let id = req.params.id;
    Wikipedia2.findById(id,(err,wikipedia2ToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.render('wikipedia2/edit2',{title:'Edit the mission information', 
            wikipedia2:wikipedia2ToEdit,
            displayName:req.user ? req.user.displayName:'' 
        });
        }
    });
}

module.exports.processEditPage2 = (req,res,next)=> {
    let id=req.params.id;
    let updateWikipedia2 = Wikipedia2 ({
        "_id":id,
        "missionname2": req.body.missionname2,
        "date2": req.body.date2,
        "leader2": req.body.leader2,
        "description2": req.body.description2
    });
    Wikipedia2.updateOne({_id:id}, updateWikipedia2,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/wikipedia2');
        }
    });
}

module.exports.performDelete2 = (req,res,next)=>{
    let id =req.params.id;
    Wikipedia2.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/wikipedia2');
        }
    });
}
