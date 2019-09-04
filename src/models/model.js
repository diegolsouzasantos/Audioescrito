const mongoose = require('mongoose');

const userSchema = require('./userSchema');
const textSchema = require('./textSchema');

const User = mongoose.model('User', userSchema);
const Text = mongoose.model('Text', textSchema);

module.exports = { User, Text };