<?php
    require "strict.php";
    session_start();
    require "db.php";
    require "img_handler.php";
    $image_flag = true;
    if(store_image('profile_pic','uploads/mem_requests/profile_pic')){
        echo "profile pic store successfully!!<br>";
    }
    else{
        echo "failed to store profile picture!!";
        $image_flag = false;
    }
    if(store_image('verification_doc','uploads/mem_requests/verification_doc')){
        echo "profile pic store successfully!!<br>";
    }
    else{
        echo "failed to store profile picture!!<br>";
        $image_flag = false;
    }
    if($image_flag){
        if($db->insert_into_membership()){
            echo "Created membership request SUCCESSFULLY!!!<br>";
        }
        else{
            echo "FAILED TO CREATE MEMBERSHIP REQUEST DUE TO DATABASE ERROR!!!<br>";
        }
    }
    else{
        echo "Failed due to image storage failure!!<br>";
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lymas | Registration Completed!</title>
    <script src="js/jquery.min.js"></script>
</head>
<body>
    
</body>
</html>