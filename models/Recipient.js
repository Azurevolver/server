const mongoose = require('mongoose');

// ES2015 destructuring
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false },
});

module.exports = recipientSchema;