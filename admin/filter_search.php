<?php
    declare(strict_types=1);
    require "../db.php";
    $result = null;
    if($_POST['type']=="1"){
        $result = $db->filter_books($_POST['category_value'],$_POST['author_value']);
    }
    elseif($_POST['type']=="2"){
        $result = $db->filter_books_by_category($_POST['category_value']);
    }
    elseif($_POST['type']=="3"){
        $result = $db->filter_books_by_author($_POST['author_value']);
    }
?>