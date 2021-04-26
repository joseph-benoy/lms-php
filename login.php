<?php
    require "db.php";
    if($db->check_password($_POST['email'],$_POST['password'])){
        header("location: dashboard.php");
    }
    else{
        header("location: admin_login.html");
    }
?>