// http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/

var express = require('express');
var router = express.Router();

/*
 * GET programlist.
 */
router.get('/programlist', function(req, res) {
    var db = req.db;
    var collection = db.get('programlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * POST to addprogram.
 */
router.post('/addprogram', function(req, res) {
    var db = req.db;
    var collection = db.get('programlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * DELETE to deleteprogram.
 */
router.delete('/deleteprogram/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('programlist');
    var programToDelete = req.params.id;
    collection.remove({ '_id' : programToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;