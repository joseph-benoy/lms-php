<?php declare(strict_types=1);
    require "../db.php";
    $obj_array = [];
    $result = $db->get_all_categories();
    if($result===false||$result==""){
        echo "Error while fetching Cateogries<br>";
    }
    else{
        array_push($obj_array,$result);
    }
    $result = $db->get_all_authors();
    if($result===false||$result==""){
        echo "Error while fetching author<br>";
    }
    else{
        array_push($obj_array,$result);
    }
    echo json_encode($obj_array);
?>