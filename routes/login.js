const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints for user login and password recovery
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Authenticates the user and returns a JWT token
 *     description: >
 *       Verifies the username and password, returns a JWT if credentials are valid.  
 *       Accounts are locked after 3 consecutive failed login attempts.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *                 example: karina
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token valid for 1 hour
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Missing username or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Username and password are required
 *       401:
 *         description: Incorrect password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Incorrect password. Attempts remaining: 2"
 *       403:
 *         description: Account locked
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Account locked due to multiple failed login attempts.
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found
 */
router.post('/login', loginController.login);

/**
 * @swagger
 * /api/lembrar-senha:
 *   post:
 *     summary: Sends a password recovery email
 *     description: >
 *       Simulates sending a password recovery email to the registered address, if the user exists in the system.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username to recover the password
 *                 example: karina
 *     responses:
 *       200:
 *         description: Recovery email sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Password recovery email sent successfully.
 *       400:
 *         description: Missing username field
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Username is required
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found
 */
router.post('/forgot-password', loginController.lembrarSenha);

module.exports = router;

