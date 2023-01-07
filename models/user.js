const mongoose = require('mongoose');

// ES2015 destructuring
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

// create model class mapping to user collection in MongoDB
mongoose.model('users', userSchema);