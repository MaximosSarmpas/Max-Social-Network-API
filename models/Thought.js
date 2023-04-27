
// Importing the moment library to format dates
const moment = require('moment');

// Importing the Schema and model objects from the Mongoose library
const { Schema, model } = require('mongoose');

// Importing the reactionSchema object from another file
const reactionSchema = require('./Reaction');

// Creating a new Mongoose schema for thoughts
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: 'A thought is required',
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );
  
// Adding a virtual property to the schema that returns the number of reactions
  thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });
  
 // Creating a Mongoose model for the thought schema 
  const Thought = model('Thought', thoughtSchema);
 
// Exporting the Thought model
  module.exports = Thought;
  
