import {ApolloServer,gql} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'

import {users} from './db.js'


const typeDefs = gql`
   type Query{
       greet:String,
	   users:[User],
	   user(id:ID!): User
   },
   type User{
        id:ID!
        firstName:String
        lastName:String
        email:String
		password:String
    }
`;

const resolvers = {
    Query:{
        greet:()=>{return "Hello world"},
		users:()=>users,
		user:(_,{id})=>users.find(user=>user.id == id),
    }
}

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});