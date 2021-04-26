<?php declare(strict_types=1);
    require "db.php";
    $db = new DB("localhost","joseph","3057","lms_php");
    echo $db->check_username($_POST['email'],true);
?>