import mongoose from 'mongoose';
import user from '../user/userType';

const Schema = mongoose.Schema;

var postSchema = new Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  title: String,
  body: String,
  user: { type: Schema.Types.ObjectId, ref: 'user'},
  date: Date,
  type: String
});

module.exports = {
    post: mongoose.model('post', postSchema),
    postSchema: postSchema
};

let post =  mongoose.model('post', postSchema)


module.exports.getListOfPosts = () => {
  return new Promise((resolve, reject) => {
    post.find({}, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getPostCount = () => {
  return new Promise((resolve, reject) => {
    post.count({}, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getPostById = (root, {id}) => {
  return new Promise((resolve, reject) => {
    post.findOne({
      id: id
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getPostByTitle = (root, {title}) => {
  return new Promise((resolve, reject) => {
    post.findOne({
      title: title
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getPostsBetweenDate = () => {
  return new Promise((resolve, reject) => {
    post.find({
      date:{
        $gt: new Date("2016-01-01T08:21:00.000Z")
      }, 
      date:{
        $lt: new Date("2018-01-01T08:21:00.000Z")
      }
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.addPost = (root, {title, body, user, date}) => {
  var newPost = new post({title:title, body:body, user:user, date:date});

  return new Promise((resolve, reject) => {
    newPost.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
}

module.exports.updatePost = (root, {id, title, body, user, date}) => {
  var updatePost = {title:title, body:body, user:user};
  return new Promise((resolve, reject) => {
    post.findOneAndUpdate({
      id: id 
    },
    {
      $set: updatePost 
    },
    {
      returnNewDocument: true 
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}
