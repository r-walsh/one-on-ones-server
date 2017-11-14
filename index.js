const express = require('express');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { json } = require('body-parser');
const compression = require('compression');
const cors = require('cors');

const schema = require('./Schema');

const PORT = 8080;
process.env.PORT = PORT;

const graphQLServer = express();

graphQLServer.use(compression());
graphQLServer.use(cors());
graphQLServer.use(
  '/graphql',
  json(),
  graphqlExpress({ schema, cacheControl: true, tracing: true }),
);
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(PORT, () =>
  console.log(`GraphiQL is now running on http://localhost:${PORT}/graphiql`),
);
