var Score = require('../models/scoreboard');
var express = require('express');
var router = express.Router();

// to create score
router.post('/', function (req,res, next) {
    var response = {};
    var scoreContent = req.body;
    console.log(scoreContent);
    var newScore = new Score(scoreContent);
    console.log(newScore);
    newScore.save(function (err,users) {
        if(err)  {
            response.error = err;
        }
        else{
            response.status = "Score created";
        }
        res.send(response);
    });
});

// to get all the scores
router.get('/', function (req,res,next) {
    Score.find(function(err,scores){
        if(err)
            res.send(err);
        else
            res.send(scores);
    })
});

// to edit a particular Score
router.put('/:id', function (req,res,next) {
    objectId=req.params.id;
    changes=req.body;
    response={};
    Score.findByIdAndUpdate(objectId,changes,{new: true},function(err){
        if(err)
            response.error=err;
        else
            response.status="Object modified";
        res.send(response);
    });
});

// to delete a particular Score
router.delete('/:id', function (req,res,next) {
       Score.remove({
            _id: req.params.id
        }, function(err, Note) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'Successfully deleted' });
        });

});

router.get('/:id',function (req,res) {
    var id = req.params.id;
    console.log(id);

    Score.findOne({'_id' : id},function (err,doc) {
        console.log(doc);
        res.json(doc);
    });
});

module.exports = router;
