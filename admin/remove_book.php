<?php
    declare(strict_types=1);
    require "../db.php";
    if(isset($_POST['book_id'])){
        echo $db->remove_row('BOOK_DETAILS',$_POST['book_id']);
    }
    else{
        echo "Book Id not recieved!";
    }
?>