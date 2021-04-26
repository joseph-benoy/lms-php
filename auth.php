<?php declare(strict_types=1);
    require "db.php";
    $db = new DB("localhost","joseph","3057","lms_php");
    if(isset($_POST['email'])&&isset($_POST['password'])){
        echo "both email and password!";
    }
    elseif(isset($_POST['email'])){
        echo "only email\n";
        echo $db->check_email($_POST['email'],true);
    }
    else{
        echo "password!";
    }
?>