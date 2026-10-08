
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");


// Temporary data
let users = [
  {
    id: "1",
    name: "Rajesh",
    email: "rajesh@gmail.com",
    age: 30,
  },
  {
    id: "2",
    name: "Hetarth",
    email: "hetarth@gmail.com",
    age: 25,
  },
];

// this schema & Query
const typeDefs = `#graphql

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
  
   type Mutation {
    
	createUser(
      name: String!
      email: String!
      age: Int!
    ): User!
    
	updateUser(
      id: ID!
      name: String
      email: String
      age: Int
    ): User
	
	deleteUser(id: ID!): Boolean!
}`


// resover function 
const resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => {
      return users.find((user) => user.id === args.id);
    },
  },	
  
  Mutation: {
    // CREATE
    createUser: (_, args) => {
      const newUser = {
        id: String(users.length + 1),
        name: args.name,
        email: args.email,
        age: args.age,
      };

      users.push(newUser);
      return newUser;
    },
	
	 // UPDATE
    updateUser: (_, args) => {
      const user = users.find((user) => user.id === args.id);

      if (!user) {
        return null;
      }
      if (args.name !== undefined) {
        user.name = args.name;
      }
      if (args.email !== undefined) {
        user.email = args.email;
      }
      if (args.age !== undefined) {
        user.age = args.age;
      }
      return user;
    },
	
	 deleteUser: (_, args) => {
      const index = users.findIndex(
        (user) => user.id === args.id
      );

      if (index === -1) {
        return false;
      }
      users.splice(index, 1);
      return true;
    },
  }
  
}

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start server
startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
}).then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});

