const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../data/users');

const JWT_SECRET = 'your_jwt_secret_key_here';

function autenticar(username, senha) {
    // Find user by username
    const user = users.find(u => u.username === username);

    if (!user) {
        return { status: 404, message: 'User not found' };
    }

    // Check if account is locked
    if (user.bloqueado) {
        return {
            status: 403,
            message: 'Account locked. Please contact support.'
        };
    }

    // Compare password with bcrypt
    const isPasswordCorrect = bcrypt.compareSync(senha, user.senha);

    if (!isPasswordCorrect) {
        // Increment failed login attempts
        user.tentativas += 1;

        // Lock account after 3 failed attempts
        if (user.tentativas >= 3) {
            user.bloqueado = true;
            return {
                status: 403,
                message: 'Account locked due to multiple failed login attempts.'
            };
        }

        return {
            status: 401,
            message: `Incorrect password. Attempts remaining: ${3 - user.tentativas}`
        };
    }

    // Reset attempts on successful login
    user.tentativas = 0;

    // Generate JWT token (valid for 1 hour)
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            email: user.email
        },
        JWT_SECRET,
        { expiresIn: '1h' }
    );

    return { status: 200, token };
}

function lembrarSenha(username) {
    // Find user by username
    const user = users.find(u => u.username === username);

    if (!user) {
        return { status: 404, message: 'User not found' };
    }

    // Simulate email sending
    console.log(`Recovery email sent to: ${user.email}`);
    console.log(`Subject: Password Recovery`);
    console.log(`Content: Hello ${user.username}, you requested a password reset.`);

    return { status: 200, message: 'Password recovery email sent successfully.' };
}

module.exports = {
    autenticar,
    lembrarSenha
};
