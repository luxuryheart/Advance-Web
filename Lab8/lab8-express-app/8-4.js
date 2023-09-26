var expressFunction = require('express');
var expressApp = expressFunction();
expressApp.use(expressFunction.json());

const students =[ 
    {stdid: 'B6318215', name: 'Nutthapong Jongjulklang'},
    {stdid: 'B6300000', name: 'Name Surname'},
]

expressApp.post('/api/resourse/students', function (req, res) {
    const stdid = req.body.stdid;
    const name = req.body.name;

    if (stdid.length == 8) {
        const student = {
            stdid: stdid,
            name: name
        }
        students.push(student)
        console.log(students)
        res.status(200).send(student);
    } else {
        res.status(404).send('Error cannot add student!');
    }
})

//npm run nodemon 8-4.js
expressApp.listen(3000, function(){
    console.log('Listening on port 3000');
})