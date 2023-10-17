const express = require('express');
const router = express.Router();
const bcypt = require('bcrypt');

const students = require('../data/students_data');

// 1.
router.post('/signup', async (req, res) => {
    const hashText = await bcypt.hash(req.body.password, 10);
    
    const playload = {
        stdid: req.body.stdid,
        password: hashText,
        name: req.body.name,                
        sex: req.body.sex,
        age: req.body.age,
        major: req.body.major,
        tel: req.body.tel
    }
    students.push(playload)
    // console.log(students);

    res.status(201).send('Singn up successfully');
})

// 2.
router.route('/signup1').post((req, res) => {
    makeHash(req.body.password)
    .then((result) => {
        const playload = {
            stdid: req.body.stdid,
            password: result,
            name: req.body.name,                
            sex: req.body.sex,
            age: req.body.age,
            major: req.body.major,
            tel: req.body.tel
        }
        insertUser(playload)
        .then((result) => {
            console.log(result);
            res.status(201).send(result);
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
})

const makeHash = async (text) => {
    const hashText1 = await bcypt.hash(text, 10);
    return hashText1;
}

const insertUser = (data) => {
    return new Promise ((resolve, reject) => {
        const student = {
            stdid: data.stdid,
            password: data.password,
            name: data.name,                
            sex: data.sex,
            age: data.age,
            major: data.major,
            tel: data.tel
        };
        students.push(student);
        resolve({message: 'Singn up successfully'});
        console.log(students)
    })
}

module.exports = router;
