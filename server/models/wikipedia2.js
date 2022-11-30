let mongoose = require('mongoose');
//creating a wikipedia model

let wikipediaModel2 = mongoose.Schema({
    missionname2: String,
    date2: String,
    leader2: String,
    description2: String
    },
    {
        collection:"wikipedias2"
    }

);
module.exports = mongoose.model('Wikipedia2', wikipediaModel2);