<?php
    declare(strict_types=1);
    require "../db.php";
    if(isset($_POST['admin_id'])){
        echo json_encode($db->get_admin_details($_POST['admin_id']));
    }
?>