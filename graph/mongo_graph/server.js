const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

async function startServer() {
  const app = express();

  await mongoose.connect("mongodb://127.0.0.1:27017/graphql_demo");

  console.log("MongoDB connected");

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
