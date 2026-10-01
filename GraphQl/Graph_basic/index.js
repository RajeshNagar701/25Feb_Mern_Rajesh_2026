// npm init
// npm install express express-graphql graphql
// server.JS

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();

// Sample data
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

const schema = buildSchema(`
  # A book has a title, author, and publication year
  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int
    genre: String
  }

  # The "Query" type is the root of all GraphQL queries
  type Query {
    # Get all books
    books: [Book!]!
    # Get a specific book by ID
    book(id: ID!): Book
    # Search books by title or author
    searchBooks(query: String!): [Book!]!
  }
  
  
  # Input type for adding/updating books
  input BookInput {
    title: String
    author: String
    year: Int
    genre: String
  }

  type Mutation {
    # Add a new book
    addBook(input: BookInput!): Book!
    # Update an existing book
    updateBook(id: ID!, input: BookInput!): Book
    # Delete a book
    deleteBook(id: ID!): Boolean
  }
  
`);

// Define resolvers for the schema fields
const root = {
  
  books: () => books,  // Resolver for fetching all books
  book: ({ id }) => books.find(book => book.id === id), // Resolver for fetching a single book by ID
  searchBooks: ({ query }) => {    // Resolver for searching books
    const searchTerm = query.toLowerCase();
    return books.filter(
      book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
  },
  addBook: ({ input }) => {
    const newBook = {
      id: String(books.length + 1),
      ...input
    }
    books.push(newBook);
    return newBook;
  },
  updateBook: ({ id, input }) => {
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex === -1) return null;

    const updatedBook = {
      ...books[bookIndex],
      ...input
    }
    books[bookIndex] = updatedBook;
    return updatedBook;
  },

  deleteBook: ({ id }) => {
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex === -1) return false;

    books.splice(bookIndex, 1);
    return true;
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable the GraphiQL interface for testing
}));

// Start the server
app.listen(4000);