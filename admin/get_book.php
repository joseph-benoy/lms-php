<?php
    declare(strict_types=1);
    require "../db.php";
    if(isset($_POST['book_id'])){
        echo json_encode($db->select_book($_POST['book_id']));
    }
    else{
        echo "Didn't recieve book id";
    }
?>