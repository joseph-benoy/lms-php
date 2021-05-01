<?php
    declare(strict_types=1);
    require "../db.php";
    $result = $db->get_category_list();
    if($result===false||$result===""){
        echo "No category<br>";
    }
    else{
        echo json_encode($result);
    }
?>