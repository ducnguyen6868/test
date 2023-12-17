
// Importing required modules
const express = require('express');

const route=require('./router')
// Initializing the express app
const app = express();

// Setting the port number
const port = 3000;

// Connecting to the MongoDB database
const db=require('./config/db')
db.connect()
route(app)
// Starting the express server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//
//In this code, we have imported the required modules and initialized the express app. We have set the port number to 3000. We have connected to the MongoDB database using the provided connection string.
//
//We have imported the User model from the './script' file. We have defined an asynchronous function called 'run' that retrieves all users from the database using the User.find() method