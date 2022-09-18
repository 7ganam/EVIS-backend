// const { parse } = require("pg-connection-string");
// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env("DATABASE_URL"));
//   return {
//     connection: {
//       client: "postgres",
//       connection: {
//         host,
//         port,
//         database,
//         user,
//         password,
//       },
//       debug: false,
//       useNullAsDefault: true,
//     },
//   };
// };
const { parse } = require("pg-connection-string");

const path = require("path");

module.exports = ({ env }) => {
  const { host, port, database, user, password, ssl } = parse(
    env("DATABASE_URL")
  );
  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      useNullAsDefault: true,
    },
  };
};
