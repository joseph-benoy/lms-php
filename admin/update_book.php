<?php
    declare(strict_types=1);
    require "../db.php";
    if(isset($_POST['book_id'])){
        echo $db->update_table('BOOK_DETAILS',$_POST['book_id'],$_POST['column_name'],$_POST['type'],$_POST['value']);
    }
    else{
        echo "Didn't recieve book id!";
    }
?>