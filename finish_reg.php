<?php
    require "strict.php";
    session_start();
    require "db.php";
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