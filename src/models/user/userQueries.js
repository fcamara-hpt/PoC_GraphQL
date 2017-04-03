import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import userType from './userType'
import user from './userSchema'
import {AggregationType} from 'graphql-aggregate'

export default {
  users: {
    type: new GraphQLList(userType),
    resolve: user.getListOfUsers
  },
  usersAverageAge: {
    type: GraphQLInt,
    resolve: user.getUsersAverageAge
  },
  usersByRegex: {
    type: new GraphQLList(userType),
    resolve: user.getListOfUsersByRegex
  },
  usersByEmailRegex: {
    type: new GraphQLList(userType),
    resolve: user.getListOfUsersByEmailRegex
  },
  usersOld: {
    type: new GraphQLList(userType),
    resolve: user.getListOfUsersOld
  },
  usersYoung: {
    type: new GraphQLList(userType),
    resolve: user.getListOfUsersYoung
  },
  usersWith23: {
    type: new GraphQLList(userType),
    resolve: user.getListOfUsersWith23
  },
  usersBetween20And50: {
    type: new GraphQLList(userType),
    resolve: user.getListOfUsersBetween20And50
  },
  userId: {
    type: userType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: user.getUserById
  },
  userByName: {
    type: userType,
    args: {
      name: {
        type: GraphQLString
      }
    },
    resolve: user.getUserByName
  }
};
