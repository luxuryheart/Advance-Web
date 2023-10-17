const jwt = require('jsonwebtoken');

const key = 'MY_KEY';

const auth = ((req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
            return res.status(401).json({
            "status": 401,
            "message": 'Unauthorized'
        })
    }
    jwt.verify(token, key)
    next();
})

module.exports = auth