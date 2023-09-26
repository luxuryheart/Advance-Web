var expressFunction = require('express');
var expressApp = expressFunction();

const students =[ 
    {stdid: 'B6318215', name: 'Nutthapong Jongjulklang'},
    {stdid: 'B6300000', name: 'Name Surname'},
]

expressApp.get('/api/resourse/students/:stdid', function (req, res) {
    const stdid = req.params.stdid;
    if (stdid === 'B6318215'){
        res.status(200).send(students[0]);
    } else if (stdid === 'B6300000'){
        res.status(200).send(students[1]);
    } else {
        res.status(404).send('Error 404 not found');
    }
})

//npm run nodemon 8-2.js
expressApp.listen(3000, function(){
    console.log('Listening on port 3000');
})