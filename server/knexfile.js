module.exports = {
    development: {
        client: 'postgresql',
        connection: {
          database: process.env.databaseName,
          username: process.env.databaseUsername,
          password: process.env.databasePassword
        },
        pool: {
          min: 2,
          max: 10,
        },
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: process.env.databaseName,
        username: process.env.databaseUsername,
        password: process.env.databasePassword
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
  };