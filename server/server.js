const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

// 1. npm i and add .gitignore for node_modules

// 2. install any additional necessary dependencies

// 3. check your config folder for the connection to mongo ('mongodb://127.0.0.1:27017/googlebooks')

// 4. use Apollo in server .js

// 5. add typeDefs and Resolvers in schema folder on server side

// 6. Setup Apollo in App.js

// 7. define mutations and queries on client side

// 8. Update components and pages with graphql/apollo

// 9. Deploy to Heroku


