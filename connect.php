<?php
$host = 'localhost'; // Your database host name
$username = 'root'; // Your database username
$password = 'carlenero'; // Your database password
$dbname = 'groniansdb'; // Your database name

// Create connection
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}
?>