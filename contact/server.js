var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
    console.log("I received a Get Request");

   db.contactlist.find(function (err, docs) {
       //console.log(docs);
       res.json(docs);
   });
});

app.post('/contactlist', function (req,res) {
    //console.log(req.body);
    db.contactlist.insert(req.body, function(err, docs){
        res.json(docs);
    });
});

app.delete('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    db.contactlist.remove({_id: mongojs.ObjectID(id)},function (err,doc) {
        res.json(doc);
    });
});

app.get('/contactlist/:id',function (req,res) {
    var id = req.params.id;
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    });
});

app.put('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
        update: {$set: { fullname: req.body.fullname, student_id: req.body.student_id, phone_number: req.body.phone_number, address: req.body.address, email_address: req.body.email_address }},
        new: true}, function (err, doc) {
            res.json(doc);
    });
});

app.listen(3000);
console.log("Server running on port 3000");
