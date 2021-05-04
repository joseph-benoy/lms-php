<?php
    declare(strict_types=1);
    session_start();
    require "../db.php";
    echo json_encode($db->get_admin_details($_SESSION['email']));
?>