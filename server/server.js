const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();

// 1. npm i and add .gitignore for node_modules

// 2. install any additional necessary dependencies

// 3. check your config folder for the connection to mongo ('mongodb://127.0.0.1:27017/googlebooks')

// 4. Updated our in server .js

// 5. add typeDefs and Resolvers in schema folder on server side

// 6. Setup Apollo in App.js

// 7. define mutations and queries on client side

// 8. Update components and pages with graphql/apollo

// 9. Deploy to Heroku

// 10. Update auth files in server and client as needed


