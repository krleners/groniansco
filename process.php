<?php
// Retrieve the form data
$name = $_POST['name'];
$password = $_POST['password'];
$email = $_POST['email'];
$number = $_POST['number'];

// Validate the form data (e.g. check for empty fields, valid email format, etc.)

// Connect to the database
$conn = mysqli_connect('localhost', 'username', 'password', 'database_name');

// Insert the form data into the database
$sql = "INSERT INTO users (name, password, email, number) VALUES ('$name', '$password', '$email', '$number')";
$result = mysqli_query($conn, $sql);

// Check if the query was successful
if ($result) {
    echo 'User added successfully!';
} else {
    echo 'Error adding user: ' . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>