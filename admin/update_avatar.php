<?php
    declare(strict_types=1);
    session_start();
    require "../db.php";
    require "../img_handler.php";
    if(isset($_POST['value'])){
        echo $db->update_avatar('ADMIN_DETAILS','IMAGE_LOCATION',$_SESSION['email'],$_POST['value']);
    }
    if(isset($_FILES['file'])){
        if(store_image('file','uploads/profile_pic')){
            echo "1";
        }
        else{
            echo "0";
        }
    }
?>