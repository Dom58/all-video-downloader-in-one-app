'use strict';

const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();

const status = true;
const createdAt = new Date().toUTCString();
const password = bcrypt.hashSync('password', 10);

const { DEFAULT_ADMIN_EMAIL } = process.env;

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('users', [{
      id: 1,
      password,
      email: DEFAULT_ADMIN_EMAIL || 'admin@gmail.com',
      fullName: 'Admin',
      emailVerified: status,
      createdAt,
      role: "admin"
    },
    {
      id: 2,
      password,
      email: 'user@gmail.com',
      fullName: 'Normal User',
      emailVerified: status,
      createdAt,
      role: "user"
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
