import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import userType from './userType';
import user from './userSchema';
import postType from '../posts/postType';

export default {
  addUser:{
    type:userType,
    args: {
      name:{
        name:'name',
        type:new GraphQLNonNull(GraphQLString)
      },
      email:{
        name:'email',
        type: new GraphQLNonNull(GraphQLString)
      },
      tel: {
        name:'tel',
        type: new GraphQLNonNull(GraphQLString)
      },
      age: {
        name:'age',
        type: new GraphQLNonNull(GraphQLInt)
      },    
      evaluation:{
        name:'evaluation',
        type: new GraphQLList(GraphQLInt)
      }
      
    },
    resolve: user.addUser
  },
  updateUser:{
    type:userType,
    args: {
      id:{
        type: GraphQLID
      },
      name:{
        name:'name',
        type:new GraphQLNonNull(GraphQLString)
      },
      email:{
        name:'email',
        type: new GraphQLNonNull(GraphQLString)
      },
      tel: {
        name:'tel',
        type: new GraphQLNonNull(GraphQLString)
      },
      age: {
        name:'age',
        type: new GraphQLNonNull(GraphQLInt)
      },    
      evaluation:{
        name:'evaluation',
        type: new GraphQLList(GraphQLInt)
      }
    },
    resolve: user.updateUser
  }
};
