const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const students = require('../data/students_data');

const key ="MY_KEY"

// 1. 
router.post('/signin', async (req, res) => {
    const playload = {
        stdid: req.body.stdid,
        password: req.body.password
    }
    try {
        const student = await findUser(playload.stdid)
        const loginStatus = await bcrypt.compare(playload.password, student.password);
        const status = loginStatus;
        
        if (status) {
            const token = jwt.sign(student, key, { expiresIn: 60*5});

            res.status(200).json({student, token, status})
        } else {
            return false
        }

    } catch (error) {
        console.log(error);
    }

})

const findUser = (stdid) => {
    return new Promise((resolve, reject) => {
        if (stdid == 'B6318215') {
            resolve(students[2])
        } else if (stdid == 'B6000111') {
            resolve(students[0])
        } else if (stdid == 'B6000222') {
            resolve(students[1])
        } else {
            reject(new Error('Error'))
        }
    })   
}

// 2. หาผู้ใช้แบบไม่ต้องตั้งเงื่อไข if
router.post('/signin', async (req, res) => {
    const playload = {
        stdid: req.body.stdid,
        password: req.body.password
    }
    
    const student = await students.find((item) => playload.stdid === item.stdid);

    if (!student) {
        return res.status(400).send('ไม่พบผู้ใช้')
    }
    
    const loginStatus = await bcrypt.compare(playload.password, student.password)
    const status = loginStatus

    if (status) {
        const token = await jwt.sign(student, key, {expiresIn: '1d'});
        res.status(201).json({student, token, status});
    } else {
        return res.status(400).send('รหัสผ่านไม่ตรงกัน');
    }


})

module.exports = router;