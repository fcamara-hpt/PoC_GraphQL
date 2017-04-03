import mongoose from 'mongoose';
import post from '../posts/postType';


const Schema = mongoose.Schema;


var userSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  name: String,
  email: String,
  tel: String,
  age: Number,
  evaluation: [Number],
  posts: String,
  type: String
});

module.exports = {
    user: mongoose.model('user', userSchema),
    userSchema: userSchema
};

let user =  mongoose.model('user', userSchema)

module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    user.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getListOfUsersOld = () => {
  return new Promise((resolve, reject) => {
    user.find({
      age:{
        $gt:24
      }
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getListOfUsersYoung = () => {
  return new Promise((resolve, reject) => {
    user.find({
      age:{
        $lt:24
      }
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getListOfUsersWith23 = () => {
  return new Promise((resolve, reject) => {
    user.find({
      age:23
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getListOfUsersBetween20And50 = () => {
  return new Promise((resolve, reject) => {
    user.find({
      age:{$gt:20}, 
      age:{$lt:50}
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getListOfUsersByRegex = (search) => {
  return new Promise((resolve, reject) => {
    user.find({
      name: {
        $regex: /el$/
      }
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getListOfUsersByEmailRegex = () => {
  return new Promise((resolve, reject) => {
    user.find({
      email: {
        $regex: /s@f/
      }
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getUserById = (root, {id}) => {
  return new Promise((resolve, reject) => {
    user.findOne({
        id: id
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getUserByName = (root, {name}) => {
  return new Promise((resolve, reject) => {
    user.findOne({
      name: name
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.addUser = (root, {name, email, tel, age, evaluation}) => {
  var newUser = new user({name:name, email:email, tel:tel, age:age, evaluation:evaluation});

  return new Promise((resolve, reject) => {
    newUser.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
}

module.exports.updateUser = (root, {id, name, email, tel, age, evaluation}) => {
  var updateUser = {name:name, email:email, tel:tel, age:age, evaluation:evaluation };
  return new Promise((resolve, reject) => {
    user.findOneAndUpdate({ 
          id: id 
        },
        {
          $set: updateUser 
        },
        {
          returnNewDocument: true 
        }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
  });
}
