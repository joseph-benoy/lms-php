<?php
    require "strict.php";
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lymas | Verify</title>
</head>
<body>
    <h1>Verify</h1>
    <?php
        $_SESSION['fname'] = $_POST['fname'];
        $_SESSION['lname'] = $_POST['lname'];
        $_SESSION['email'] = $_POST['email'];
        $_SESSION['phone'] = $_POST['phone'];
        $_SESSION['dob'] = $_POST['dob'];
        $_SESSION['house'] = $_POST['house'];
        $_SESSION['street'] = $_POST['street'];
        $_SESSION['city'] = $_POST['city'];
        $_SESSION['state'] = $_POST['state'];
        $_SESSION['country'] = $_POST['country'];
        $_SESSION['pin'] = $_POST['pin'];
        foreach($_SESSION as $key=>$value){
            echo "{$key} = {$value}<br>";
        }
        echo var_dump($_FILES);
    ?>
</body>
</html>
