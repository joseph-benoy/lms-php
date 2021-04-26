<?php
    require "strict.php";
    session_start();
    require "db.php";
    if($db->check_password($_POST['email'],$_POST['password'])){
        $_SESSION['email'] = $_POST['email'];
        $_SESSION['password'] = $_POST['password'];
        header("location: dashboard.php");
    }
    else{
        header("location: admin_login.html");
    }
?>