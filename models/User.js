const mongoose = require('mongoose');
const { Schema } = mongoose;
// Using mongoose means you have to define a schema

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// Telling Mongoose to use/createa model called users using the userSchema
mongoose.model('users', userSchema);
