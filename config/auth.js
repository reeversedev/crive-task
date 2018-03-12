module.exports = {
    'facebookAuth': {
        'clientID': '194470757984275',
        'clientSecret': '0809ba9900149f23326bef2c85bf74fd',
        'callbackURL': 'http://localhost:3000/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields': ['id', 'emails', 'name']
    }
}