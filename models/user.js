const mongoose = require('mongoose');

// ES2015 destructuring
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0}
});

// create model class mapping to user collection in MongoDB
mongoose.model('users', userSchema);