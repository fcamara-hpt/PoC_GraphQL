import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import postType from './postType';
import post from './postSchema';
import userType from '../user/userType';

var GraphQLDate = require('graphql-date')

export default {
  addPost:{
    type:postType,
    args: {
      title:{
        name:'title',
        type:new GraphQLNonNull(GraphQLString)
      },
      body:{
        name:'body',
        type: new GraphQLNonNull(GraphQLString)
      },
      user: {
        name:'user',
        type: new GraphQLNonNull(GraphQLID)
      },
      date: {
        name:'date',
        type: new GraphQLNonNull(GraphQLDate)
      }
    },
    resolve: post.addPost
  },
  updatePost:{
    type:postType,
    args: {
      id:{
        type: GraphQLID
      },
      title:{
        name:'title',
        type:new GraphQLNonNull(GraphQLString)
      },
      body:{
        name:'body',
        type: new GraphQLNonNull(GraphQLString)
      },
      user: {
        name:'user',
        type: new GraphQLNonNull(GraphQLID)
      },
      date: {
        name:'date',
        type: new GraphQLNonNull(GraphQLDate)
      }
    },
    resolve: post.updatePost
  }
};
