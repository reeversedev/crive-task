var passport = require('passport'),
    clientID = require('../config/auth'),
    FacebookTokenStrategy = require('passport-facebook-token'),
    User = require('mongoose').model('User');

module.exports = function () {
    passport.use(new FacebookTokenStrategy({
        clientID: clientID.facebookAuth.clientID,
        clientSecret: clientID.facebookAuth.clientSecret
    }, function (accessToken, refreshToken, profile, done) {
        User.upsertFbUser(accessToken, refreshToken, profile, function (err, user) {
            return done(err, user);
        });
    }));
};