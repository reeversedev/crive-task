var mongoose = require('./app/models/database');
var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var bodyParser = require('body-parser');

mongoose();

var User = require('mongoose').model('User');
var passportConfig = require('./config/passport');

passportConfig();

var router = express.Router();

var app = express();

var corsOption = {
    origin: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};

app.use(cors(corsOption)); // Setting CORS

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var createToken = function (auth) {
    return jwt.sign({
        id: auth.id
    }, 'my-secret', {
        expiresIn: 60 * 120
    });
};

var generateToken = function (req, res, next) {
    req.token = createToken(req.auth);
    next();
}

var sendToken = function (req, res) {
    res.setHeader('x-auth-token', req.token);
    res.status(200).send(req.auth);
};

router.route('/auth/facebook').post(passport.authenticate('facebook-token', {
    session: false
}), function (req, res, next) {
    if (!req.user) {
        return res.send(401, 'User is not Authenticated.');
    }

    req.auth = {
        id: req.user.id
    };

    next();
}, generateToken, sendToken);

var authenticate = expressJwt({
    secret: 'my-secret',
    requestProperty: 'auth',
    getToken: function (req) {
        if (req.headers['x-auth-token']) {
            return req.headers['x-auth-token'];
        }
        return null;
    }
});

var getCurrentUser = function (req, res, next) {
    User.findById(req.auth.id, function (err, user) {
        if (err) {
            next(err);
        } else {
            req.user = user;
            next();
        }
    });
};

var updateCurrentUser = function (req, res, next) {
User.findByIdAndUpdate({_id: req.auth.id}, {$set: req.body}, function(err, user) {
    if(err) {
        next(err);
    } else {
        console.log(req.body);
        console.log(user);
    }
})
}

var getOne = function (req, res) {
    var user = req.user.toObject();

    delete user['facebookProvider'];
    delete user['__v'];

    res.json(user);
};

router.route('/auth/me').get(authenticate, getCurrentUser, getOne);
router.route('/update').post(authenticate,updateCurrentUser);

app.use('/api', router);

app.listen(process.env.PORT || 3000);
module.exports = app;

console.log('Backend Server Started.');