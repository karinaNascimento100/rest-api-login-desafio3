// config/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Login API',
            version: '1.0.0',
            description: 'description: API for user authentication with account blocking after 3 failed attempts and password recovery',
        },
    },
    apis: ['./routes/*.js'], // Isso busca os comentários JSDoc das rotas
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
