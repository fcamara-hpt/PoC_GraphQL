import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} from 'graphql'

import user from '../user/userType'
import userSchema from '../user/userSchema';

var GraphQLDate = require('graphql-date')


// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'Post',
  description: 'Post object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    body: {
      type: GraphQLString
    },
    user: {
      type:  new GraphQLNonNull(GraphQLID), ref: 'user',
    },
    date: {
      type: GraphQLDate
    }
  })
});


// import userSchema from '../user/userSchema';
// import mongoose from 'mongoose';

// const Schema = mongoose.Schema;

//     user: {
//       type: Schema.Types.ObjectId, ref: 'user'
//     }


