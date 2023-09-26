var expressFunction = require('express');
var expressApp = expressFunction();

expressApp.get('/api/resourse', function (req, res) {
    res.status(200).send('Hello World');
})

//npm run nodemon 8-1.js
expressApp.listen(3000, function(){
    console.log('Listening on port 3000');
})