var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var currentUserSchema = new mongoose.Schema({
  local: {
    firstname: String,
    lastname: String,
    email: String,
    username: String,
    password: String,
    graduation: Number,
    birthday: Date,
    school: String,
    major: String
  },
});

currentUserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

currentUserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('CurrentUser', currentUserSchema);

/*
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
*/