<?php
ob_start();
?>
<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'samp');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'password');

$odb = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USERNAME, DB_PASSWORD);
?>