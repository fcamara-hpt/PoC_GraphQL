import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'

 import postType from '../posts/postType'
 import postSchema from '../posts/postSchema'


// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'user',
  description: 'User object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email:{
      type: GraphQLString
    },
    tel: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    posts: {
      type: new GraphQLList(postType),
           resolve(user){
               const { _id } = user;
               return postSchema.find({ user: _id}).exec();
           }
    },
    evaluation: {
      type: new GraphQLList(GraphQLInt)
    }
  })
});
