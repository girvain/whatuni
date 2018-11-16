<?php
// get the input field from ajax POST request
$text = $_POST['text'];
$defaultNum = 1;
//connect to database
$dbc = mysqli_connect('localhost', 'root', 'root', 'whatuni')
or die('Error connecting to MySQL server.');

// insert the search text into the database
$query = "INSERT INTO search_log (search_text, total) VALUES ('$text', 1)
    ON DUPLICATE KEY UPDATE total=total+1";
if (!empty($text)) {
    mysqli_query($dbc, $query)
    or die('Error querying database.');
}

// output the search parameters from database on pageload, not every time!
$output_query = "SELECT search_text, total FROM search_log";
$result = mysqli_query($dbc, $output_query)
or die('Error querying database');

// if (mysqli_num_rows($result) > 0) {
//     // output data of each row
//     while ($row = mysqli_fetch_assoc($result)) {
//         echo "ip address: " . $row["ip"] . "<br>" . "search param: " . $row["search_text"] . "<br>";
//     }
// }

$array = array();

while ($row = mysqli_fetch_assoc($result)) {
    $array[] = $row;
}
echo '<script>var searchLog = ' . json_encode($array) . ';'; //Here ProductsData is just a simple String u can write anything instead
echo 'console.log(searchLog);</script>';

echo '<script>';
echo 'var name = ' . json_encode($name) . ';';
echo '</script>';
mysqli_close($dbc);
