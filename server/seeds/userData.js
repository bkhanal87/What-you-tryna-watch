const { User } = require('../models');

const userData = [
    {
        username: "TestUser",
        email: "testuser@email.com",
        password: "password01",
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;