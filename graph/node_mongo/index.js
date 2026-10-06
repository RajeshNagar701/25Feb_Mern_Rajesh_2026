

// folder create demo-app
// npm init -y   create package.JSON
// npm install express express-graphql graphql nodemon

// cretae index.js then add below code

const express = require('express');
const app = express();


const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const books = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Novel'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Southern Gothic'
  }
];

// Define the schema using GraphQL schema language
const schema = buildSchema(`
	type Book {
    id: ID!
    title: String!
    author: String!
    year: Int
    genre: String
  }
  
  type Query{
	  books: [Book!]!
	  book(id: ID!): Book
	  searchBooks(query: String!): [Book!]!
  }`
)

// Define resolvers for the schema fields
const action = {
 
  books: () => books, // Resolver for fetching all books
  book: ({ id }) => books.find(book => book.id === id),// Resolver for fetching a single book by ID
  searchBooks: ({ query }) => {     // Resolver for searching books
    const searchTerm = query.toLowerCase();
    return books.filter(
      book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: action,
  // Enable the GraphiQL interface for testing
  graphiql: true,
}));

app.listen('5000');

/*

{
  books {
    id,
    title,
    author
  }
}


{
book(id:"1"){
  	id,
  	title
	}
}


{
  searchBooks(query: "The Great") {
    id
    title
    author
  }
}


*/