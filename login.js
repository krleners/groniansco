const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Creating connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name'
});

// Connecting to the MySQL database
connection.connect(function(error) {
    if (error) {
        console.error('Error connecting to the database: ' + error.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

// Creating the login API endpoint
app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Querying the database to check if the user exists and the password is correct
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], function(error, results, fields) {
        if (error) {
            console.error('Error while performing the query: ' + error.stack);
            res.sendStatus(500);
            return;
        }

        // If the query returned a row, it means the user exists and the password is correct
        if (results.length > 0) {
            console.log('User ' + username + ' logged in successfully');
            res.sendStatus(200);
        } else {
            console.log('Invalid credentials for user ' + username);
            res.sendStatus(401);
        }
    });
});

// Starting the server
app.listen(3000, function() {
    console.log('Server started on port 3000');
});