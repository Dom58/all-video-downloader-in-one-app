import 'dotenv/config';

export default {
  development: {
    use_env_variable: '',
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: process.env.DB_DIALECT,
    seederStorage: 'sequelize',
    port: process.env.DB_PORT
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    logging: false,
  },
};

// export default config;
