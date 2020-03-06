<?php
	session_start();
    session_unset();
    session_destroy();
    setcookie('remember_me', '', 1, '/');
	header("location: login.php");
	exit;
?>
