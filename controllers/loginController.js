const authService = require('../services/authService');

/**
 * Handles the user login process.
 * Validates input, calls authentication service, and returns appropriate responses.
 */
function login(req, res) {
    const { username, senha } = req.body;

    // Input validation
    if (!username || !senha) {
        return res.status(400).json({
            message: 'Username and password are required'
        });
    }

    // Calls authentication logic
    const result = authService.autenticar(username, senha);

    // Responds according to the result
    return res.status(result.status).json({
        token: result.token,
        message: result.message
    });
}

/**
 * Handles password recovery request.
 * Validates input and calls the password recovery service.
 */
function lembrarSenha(req, res) {
    const { username } = req.body;

    // Input validation
    if (!username) {
        return res.status(400).json({
            message: 'Username is required'
        });
    }

    // Calls password recovery logic
    const result = authService.lembrarSenha(username);

    // Responds accordingly
    return res.status(result.status).json({
        message: result.message
    });
}

module.exports = {
    login,
    lembrarSenha
};
