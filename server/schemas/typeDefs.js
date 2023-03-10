const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    userName: String
    email: String
    posts: [Post]
  }


  type Post {
    _id: ID
    userID: ID
    content: String
  }


  type Auth {
    token: ID
    user: User
  }

  type Query {
    posts: [Post]
    post(_id: ID!): Post
    user: User
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addPost(user: [ID]!): Post
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
