const express = require('express');
const app = express();
const loginRoutes = require('./routes/login');

// Middleware para leitura de JSON
app.use(express.json());

// Swagger
const setupSwagger = require('./config/swagger');
setupSwagger(app);

// Rotas
app.use('/api', loginRoutes);

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
