const { expressjwt } = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    return expressjwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            { url: /(.*)/, methods: ['GET', 'OPTIONS'] },
            `/users/login`,
            `/users/register`,
            // { url: /(.*)/ }
        ]
    });
}

async function isRevoked(req, payload, done) {
    if (!payload.isAdmin) {
        done(null, true);
    }

    done();
}

module.exports = authJwt;
