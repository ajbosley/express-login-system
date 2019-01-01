const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// User sign up
router.post('/signup', function (req, res) {
    // Email address check
    User.findOne({
            email: req.body.email
        })
        .then(response => {
            if (response && (response.email === req.body.email)) {
                return res.status(401).json({
                    'error': "Email address already in use, please recover your account or use a different email address"
                })
            } else if (response && (response.length === 0)) {
                // Create new user
                bcrypt.hash(req.body.password, 10, function (err, hash) {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            avatarURL: req.body.avatarURL || '',
                            created: new Date(),
                            dob: req.body.dob || new Date(new Date().getFullYear() - 18, new Date().getMonth(), 1),
                            status: req.body.status || 'New Member',
                            authLevel: req.body.authLevel || 0,
                            phrase: req.body.phrase || 'I am unoriginal...'

                        });
                        user.save().then(function (result) {
                            console.log(result);
                            res.status(200).json({
                                success: 'New user has been created'
                            });
                        }).catch(error => {
                            res.status(500).json({
                                error: err
                            });
                        });
                    }
                });
            }
        })
});

// User signin
router.post('/signin', function (req, res) {
    User.findOne({
            email: req.body.email
        })
        .exec()
        .then(function (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (err) {
                    return res.status(401).json({
                        failed: 'Unauthorized Access'
                    });
                }
                if (result) {
                    const JWTToken = jwt.sign({
                            email: user.email,
                            _id: user._id
                        },
                        process.env.SECRET, {
                            expiresIn: '2h'
                        });
                    return res.status(200).json({
                        token: JWTToken,
                        authLevel: user.authLevel,
                        avatarURL: user.avatarURL,
                        firstName: user.firstName,
                        lastName: user.lastName
                    });
                }
                return res.status(401).json({
                    failed: 'Unauthorized Access'
                });
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });;
});
module.exports = router;