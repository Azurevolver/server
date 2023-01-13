const mongoose = require('mongoose');

// ES2015 destructuring
//const Schema = mongoose.Schema;
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    recipients: [RecipientSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User'}, // ref to a user
    dateSent: Date,
    lastResponded: Date
});

// create model class mapping to survey collection in MongoDB
mongoose.model('surveys', surveySchema);