<?php
// get the input field from ajax POST request
$text = $_POST['text'];
$ip;
//get the ip address of current user
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

//connect to database
$dbc = mysqli_connect('localhost', 'root', 'root', 'whatuni')
or die('Error connecting to MySQL server.');

// insert the search text into the database
$query = "INSERT INTO search_log (ip, search_text)  VALUES ('$ip', '$text')";
if (!empty($text)) {
    mysqli_query($dbc, $query)
    or die('Error querying database.');
}

// output the search parameters from database on pageload, not every time!
$output_query = "SELECT search_text FROM search_log";
$result = mysqli_query($dbc, $output_query)
or die('Error querying database');
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ip address: " . $row["ip"] . "<br>" . "search param: " . $row["search_text"] . "<br>";
    }
} 

mysqli_close($dbc);
