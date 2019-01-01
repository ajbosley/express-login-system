const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403).json({"error": "Header missing"})
    }
}

//This is a protected route 

router.get('/data', checkToken, (req, res) => {
    //verify the JWT token generated for the user
    jwt.verify(req.token, process.env.SECRET, (err, authorizedData) => {
        if (err) {
            //If error send Forbidden (403)
            console.log(err)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403).json({"error": "Invalid login token"})
        } else {
            //If token is successfully verified, we can send the autorized data 
            res.json({
                message: 'Successful gathered spotify data',
                authorizedData
            });
            console.log('SUCCESS: Connected to spotify route');
        }
    })
});


module.exports = router;