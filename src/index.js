// Import GraphQL and destructure for easy access
import {
  GraphQLObjectType,
  GraphQLSchema
 } from 'graphql'

// Import express server
import express from 'express'

// Import mongoose to connect to MongoDB
import mongoose from 'mongoose'

// Import express-graphql an easy express integration of https://github.com/graphql/graphiql
import graphqlHTTP from 'express-graphql'

// Import GraphQL Queries
import userQueries from './models/user/userQueries'
import postQueries from './models/posts/postQueries'

// Import GraphQL Mutations
import userMutations from './models/user/userMutations'
import postMutations from './models/posts/postMutations'

// Setup GraphQL RootQuery
let RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Realize Root Query',
  fields: () => ({
    users: userQueries.users,
    userId: userQueries.userId,
    userByName: userQueries.userByName,
    usersOld: userQueries.usersOld,
    usersYoung: userQueries.usersYoung,
    usersWith23: userQueries.usersWith23,
    usersBetween20And50: userQueries.usersBetween20And50,
    usersAverageAge: userQueries.usersAverageAge,
    usersByRegex: userQueries.usersByRegex,
    usersByEmailRegex: userQueries.usersByEmailRegex,

    post: postQueries.post,
    postCount: postQueries.postCount,
    posts: postQueries.posts,
    postId: postQueries.postId,
    postsBetweenDate: postQueries.postsBetweenDate,
    postByTitle: postQueries.postByTitle

  })
})

// Setup GraphQL RootMutation
let RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Realize Root Mutations',
  fields: () => ({
    addUser: userMutations.addUser,
    updateUser: userMutations.updateUser,
    addPost: postMutations.addPost,
    updatePost: postMutations.updatePost
  })
})

// Set up GraphQL Schema with our RootQuery and RootMutation
let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

// Connect MongoDB with Mongoose
mongoose.connect('mongodb://localhost/graphql-express-mongodb')

// Set up Express and integrate with our GraphQL Schema and configure to use graphiql
var app = express()
app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }))
app.listen('3000')

var status = {
  Express: {
    "Online": true,
    "Port": 3000
  },
  "GraphiQL": {
    "url": "http://localhost:3000/graphql"
  }
}
console.dir(status, {depth: null, colors: true })
