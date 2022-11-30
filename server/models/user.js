let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
    username:
    {
        type:String,
        default:"",
        trim:true,
        required:'Username is required'
    },

    /*
    password:
    {
        type:String,
        default:"",
        trim:true,
        required:'Password is required'
    }, */
    
    displayName:
    {
        type:String,
        default:"",
        trim:true,
        required:'displayName is required'
    },

    created:
    {
        type:Date,
        default:Date.now
    },

    update:
    {
        type:Date,
        default:Date.now
    }
},
{
    collection:"user"
}
)

// configure option for user model

let option = ({MissingPasswordError:'Wrong/Missing Password'});
User.plugin(passportLocalMongoose,option);
module.exports.User = mongoose.model('User',User);
