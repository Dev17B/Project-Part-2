let mongoose = require('mongoose');
//creating a wikipedia model

let wikipediaModel = mongoose.Schema({
    missionname: String,
    date: String,
    leader: String,
    description: String
    },
    {
        collection:"wikipedias"
    }

);
module.exports = mongoose.model('Wikipedia', wikipediaModel);