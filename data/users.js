
const bcrypt = require('bcrypt');

const users = [
    {
        id: 1,
        username: 'karina',
        senha: bcrypt.hashSync('senha123', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'karina@email.com'
    },
    {
        id: 2,
        username: 'joao',
        senha: bcrypt.hashSync('123456', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'joao@email.com'
    },
    {
        id: 3,
        username: 'maria',
        senha: bcrypt.hashSync('senha456', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'maria@email.com'
    },
    {
        id: 4,
        username: 'pedro',
        senha: bcrypt.hashSync('abc123', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'pedro@email.com'
    },
    {
        id: 5,
        username: 'lucas',
        senha: bcrypt.hashSync('lucas123', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'lucas@email.com'
    },
    {
        id: 6,
        username: 'ana',
        senha: bcrypt.hashSync('ana321', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'ana@email.com'
    },
    {
        id: 7,
        username: 'rafael',
        senha: bcrypt.hashSync('rafa123', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'rafael@email.com'
    },
    {
        id: 8,
        username: 'juliana',
        senha: bcrypt.hashSync('juliana456', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'juliana@email.com'
    },
    {
        id: 9,
        username: 'carla',
        senha: bcrypt.hashSync('carla321', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'carla@email.com'
    },
    {
        id: 10,
        username: 'rodrigo',
        senha: bcrypt.hashSync('rodrigo789', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'rodrigo@email.com'
    },
    {
        id: 11,
        username: 'tania',
        senha: bcrypt.hashSync('tania456', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'tania@email.com'
    },
    {
        id: 12,
        username: 'ricardo',
        senha: bcrypt.hashSync('senha987', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'ricardo@email.com'
    },
    {
        id: 13,
        username: 'aline',
        senha: bcrypt.hashSync('aline999', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'aline@email.com'
    },
    {
        id: 14,
        username: 'gustavo',
        senha: bcrypt.hashSync('gustavo111', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'gustavo@email.com'
    },
    {
        id: 15,
        username: 'patricia',
        senha: bcrypt.hashSync('pat123', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'patricia@email.com'
    },
    {
        id: 16,
        username: 'bruno',
        senha: bcrypt.hashSync('bruno2023', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'bruno@email.com'
    },
    {
        id: 17,
        username: 'luana',
        senha: bcrypt.hashSync('luana2023', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'luana@email.com'
    },
    {
        id: 18,
        username: 'davi',
        senha: bcrypt.hashSync('davi2023', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'davi@email.com'
    },
    {
        id: 19,
        username: 'viviane',
        senha: bcrypt.hashSync('viviane2023', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'viviane@email.com'
    },
    {
        id: 20,
        username: 'eduardo',
        senha: bcrypt.hashSync('eduardo2023', 10),
        tentativas: 0,
        bloqueado: false,
        email: 'eduardo@email.com'
    }
];

module.exports = users;
