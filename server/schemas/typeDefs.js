const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
    genieTokens: Int
  }

  type Thought {
    _id: ID
    thoughtTitle:String
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type OpenAIResponse {
    answer: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
    openai(input: String!): OpenAIResponse!
    questions(keyword: String!): [Question!]!
    question(id: ID!): Question
  }
  type Question {
    _id: ID!
    questionText: String!
    user: User
  }
  input NewQuestionInput {
    questionText: String!
    authorName: String!
    tags: [String!]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!, thoughtTitle:String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
    addQuestion(input: NewQuestionInput!): Question!
  }
`;

module.exports = typeDefs;
