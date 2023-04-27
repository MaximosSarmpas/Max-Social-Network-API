// Import the express library
const express = require('express');

// Import the database configuration from the 'config' folder
const db = require('./config/connection');

// Import the API routes from the 'routes' folder
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Use the express middleware to parse incoming URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Use the express middleware to parse incoming JSON data
app.use(express.json());

// Use the imported routes for handling API requests
app.use(routes);

// Connect to the database and start the server once the connection is open
db.once('open', () => {
  
  // Start the express server and listen for incoming requests on the specified port
app.listen(PORT, () => {
   
  // Log a message indicating that the server is running and on which port
 console.log(`API server running on port ${PORT}!`);
  });
});
