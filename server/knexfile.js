// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
        host: process.env.POSTGRESQL_HOST,
        port: process.env.POSTGRESQL_PORT,
        user: process.env.POSTGRESQL_USER,
        password: process.env.POSTGRESQL_PASSWORD,
        database: process.env.POSTGRESQL_DATABASE_NAME
    },
    pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
  },

  staging: {
    client: 'postgresql',
    connection: {
        host: process.env.POSTGRESQL_HOST,
        port: process.env.POSTGRESQL_PORT,
        user: process.env.POSTGRESQL_USER,
        password: process.env.POSTGRESQL_PASSWORD,
        database: process.env.POSTGRESQL_DATABASE_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
        host: process.env.POSTGRESQL_HOST,
        port: process.env.POSTGRESQL_PORT,
        user: process.env.POSTGRESQL_USER,
        password: process.env.POSTGRESQL_PASSWORD,
        database: process.env.POSTGRESQL_DATABASE_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
