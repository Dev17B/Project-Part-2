let mongoose = require('mongoose');
//creating a wikipedia model

let wikipediaModel3 = mongoose.Schema({
    missionname3: String,
    date3: String,
    leader3: String,
    description3: String
    },
    {
        collection:"wikipedias3"
    }

);
module.exports = mongoose.model('Wikipedia3', wikipediaModel3);