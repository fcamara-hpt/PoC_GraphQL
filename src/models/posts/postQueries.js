import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import postType from './postType'
import post from './postSchema'
import user from '../user/userType'

var GraphQLDate = require('graphql-date')


export default {
  posts: {
    type: new GraphQLList(postType),
    resolve: post.getListOfPosts
  },
  post: {
    type: new GraphQLList(postType),
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: post.getPostByUser
  },
  postId: {
    type: postType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: post.getPostById
  },
  postsBetweenDate: {
    type: new GraphQLList(postType),
    args: {
      date: {
        type: GraphQLDate
      }
    },
    resolve: post.getPostsBetweenDate
  },
  postCount: {
    type: GraphQLInt,
    resolve: post.getPostCount
  },
  postByTitle: {
    type: postType,
    args: {
      title: {
        type: GraphQLString
      }
    },
    resolve: post.getPostByTitle
  }
};
