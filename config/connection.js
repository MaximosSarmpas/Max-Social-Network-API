// Import the Mongoose library
const mongoose = require('mongoose');

// Enable strict mode for queries (enforces strict schema checks for query fields)
mongoose.set('strictQuery', true);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the connection object so it can be used by other modules
module.exports = mongoose.connection;
