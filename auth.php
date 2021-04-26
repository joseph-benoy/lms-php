<?php
    require "db.php";
    if(isset($_POST['email'])&&isset($_POST['password'])){
        echo $db->check_password($_POST['email'],$_POST['password'],true);
    }
    else{
        if(isset($_POST['email'])){
            echo $db->check_email($_POST['email'],true);
        }
    }
?>