const { User } = require('../models');
const {signToken} = require("../utils/auth")
const resolvers = {
  Query: {
    me: async () => {

    },
  
  },
  Mutation: {
    // login: async (parent, args) => {

    // },
    addUser: async (parent, args) => {
      console.log("args:", args);

      const user = await User.create(args);
      console.log("user:", user);
 token = signToken(user);
      console.log("token:", token);
      return { token, user };
    },
    // saveBook: async (parent, { _id, techNum }) => {

    // },
    // removeBook: async (parent, { _id, techNum }) => {

    // },
  },
};

module.exports = resolvers;
