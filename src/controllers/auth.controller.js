const authClient = require('../grpc/clients/authClient');
const HTTP_STATUS = require('./httpStatusCode');

/**
 * Login endpoint: Authenticates the user and returns a JWT token.
 */
exports.login = (req, res) => {
    const {
        username,
        password
    } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            error: 'Username and password are required'
        });
    }

    authClient.authenticate({
        username,
        password
    }, (error, response) => {

        if (error) {
            console.error('gRPC Error:', error);
            return res.status(500).json({
                error: 'Internal server error'
            });
        }

        if (response.status && response.status.code === 'OK') {
            // Authentication ok
            res.status(200).json({
                token: response.token
            });
        } else {
            // Authentication error
            res.status(401).json({
                error: response.status?.message || 'Invalid credentials'
            });
        }
    });
};

exports.authorize = (req, res) => {
    const {
        token
    } = req.body;  

    if (!token) {
        return res.status(400).json({
            error: 'Token is required'
        });
    }
    authClient.authorize({
        token
    }, (error, response) => {
        if (error) {
            console.error('gRPC Error:', error);
            return res.status(500).json({
                error: 'Internal server error'
            });
        }

        res.status(200).json({
            authorized: response.authorized
        });
    });
};