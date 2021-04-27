<?php
    require "strict.php";
    session_start();
    require "db.php";
    require "image_handler.php";
    if(store_image('profile_pic','uploads/mem_requests/profile_pic')){
        echo "profile pic store successfully!!";
    }
    else{
        echo "failed to store profile picture!!";
    }
    if(store_image('verification_doc','uploads/mem_requests/verification_doc')){
        echo "profile pic store successfully!!";
    }
    else{
        echo "failed to store profile picture!!";
    }
    echo $db->insert_into_membership($_POST);
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