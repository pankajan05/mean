var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
    console.log("I received a Get Request");

    person1 = {
        fullname: 'pankajan satkunam',
        student_id: 'SE/2016/032',
        phone_number: '0775498903',
        address: 'Earlalai East Earlalai',
        email_address: 'pankajan05@gmail.com'
    };
    person2 = {
        fullname: 'janaka edirisinghe',
        student_id: 'SE/2016/007',
        phone_number: '0775453443',
        address: 'Polonaruwa',
        email_address: 'janaka@gmail.com'
    };

    var contactlist = { person1, person2};
    res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");
