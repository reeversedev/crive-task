var mongoose = require('mongoose'),
    database = require('../../config/database'),
    Schema = mongoose.Schema;

module.exports = function () {
    var db = mongoose.connect(database.url);

    var UserSchema = new Schema({
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
            required: false,
            trim: true,
            unique: true,
            match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        address1: {
            type: String
        },
        address2: {
            type: String
        },
        code: {
            type: Number
        },
        country: {
            type: String
        },
        state: {
            type: String
        },
        facebookProvider: {
            type: {
                id: String,
                token: String
            },
            select: false
        },
        photo: {
            type: String
        }
    });

    UserSchema.set('toJSON', {
        getters: true,
        virtuals: true
    });

    UserSchema.statics.upsertFbUser = function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        var that = this;
        return this.findOne({
            'facebookProvider.id': profile.id
        }, function (err, user) {
            if (!user) {
                var newUser = new that({
                    firstName: profile.displayName,
                    email: profile.emails[0].value,
                    facebookProvider: {
                        id: profile.id,
                        token: accessToken
                    },
                    photo: profile.photos[0].value
                });
                newUser.save(function (error, savedUser) {
                    if (error) {
                        console.log(error);
                    }
                    return cb(error, savedUser);
                });
            } else {
                return cb(err, user);
            }
        });
    };
    mongoose.model('User', UserSchema);
    return db;
};