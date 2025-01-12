const { authorize } = require('../grpc/clients/authClient');

function jwtAuthMiddleware(req, res, next) {
    if (req.path.startsWith('/auth/login')) {
        return next();
    }
    if (req.path.startsWith('/user') && req.method === 'POST') {
        return next();
    }
    const token = req.headers.authorization || '';
    authorize({token}, (err, response) => {
        if (err || !response?.authorized) {
            return res.status(401).json({ error: 'Unauthorized, missing Authorization' });
        }
        next();
    });
}

module.exports = jwtAuthMiddleware;