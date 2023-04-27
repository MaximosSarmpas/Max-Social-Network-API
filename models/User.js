

// Import the required modules from the mongoose package
const { Schema, model } = require('mongoose');


// Define a new schema for the User model
const userSchema = new Schema(
    {
       // Define the username field with type, required, unique, and trim properties
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
       // Configure the schema to include virtuals when converting to JSON
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
 
  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
   // Create the User model using the userSchema
  const User = model('User', userSchema);
  
// Export the User model
  module.exports = User;
