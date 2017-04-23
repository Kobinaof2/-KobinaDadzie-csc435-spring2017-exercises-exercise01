
<?php
$hostname = "localhost";
$user = "root";
$password = "";
$database = "exercise05";


$mysqli = new mysqli($hostname,$user,$password,$database);
if ($mysqli->connect_errno) {

  die("Error: " . $mysqli->connect_errno);

}







?>
