<?php
    declare(strict_types=1);
    session_start();
    require "../db.php";
    if(isset($_POST['obj'])){
        $obj = json_decode($_POST['obj']);
        $value_array = [$obj->fname,$obj->lname,$obj->email,$obj->phone,$obj->dob,$obj->house,$obj->street,$obj->city,$obj->state,$obj->country,$obj->pin];
        $email = $_SESSION['email'];
        echo $db->update_admin($email,$value_array);
        $_SESSION['email'] = $obj->email;
    }
?>