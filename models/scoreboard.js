var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var scoreboardSchema = new Schema ( {
    name: {type: String, required: true},
    etime: {'0':{type: Number},'1':{type: Number},'2':{type: Number}},
    escore: {'0':{type: Number},'1':{type: Number},'2':{type: Number}},
    // e1time: {type: Number},
    // e1score: {type: Number},
    // e2time: {type: Number},
    // e2score: {type: Number},
    // e3time: {type: Number},
    // e3score: {type: Number},
    time: {type: Number},
    score: {type: Number}
});

var scoreboard = mongoose.model('scoreboard', scoreboardSchema);
module.exports = scoreboard;
