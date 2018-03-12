var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../app/models/user');

var configAuth = require('./auth');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        })
    });

    var fbStrategy = configAuth.facebookAuth;
    fbStrategy.passReqToCallback = true;
    passport.use(new FacebookStrategy(fbStrategy, function (req, token, refreshToken, profile, done) {
        process.nextTick(function () {
            if (!req.user) {
                User.findOne({
                    'facebook.id': profile.id
                }, function (err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        console.log(profile);
                        if (!user.facebook.token) {
                            user.facebook.token = token;
                            user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                            user.facebook.email = (profile.emails[0].value || '').toLowerCase();

                            user.save(function (err) {
                                if (err)
                                    return done(err);

                                return done(null, user);
                            });
                        }
                        return done(null, user);
                    } else {
                        var newUser = new User();
                        newUser.facebook.id = profile.id;
                        newUser.facebook.token = token;
                        newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                        if(profile.emails) {
                            newUser.facebook.email = (profile.emails[0].value || '').toLowerCase(); // facebook can return multiple emails so we'll take the first
                        }

                        newUser.save(function (err) {
                            if (err)
                                return done(err);

                            return done(null, newUser);
                        });
                    }
                });
            } else {
                //user already exists and is logged in, linking the account

                var user = req.user;

                user.facebook.id = profile.id;
                user.facebook.token = token;
                user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                user.facebook.email = (profile.emails[0].value || '').toLowerCase();

                user.save(function (err) {
                    if (err)
                        return done(err);

                    return done(null, user);
                })
            }
        })
    }))
}