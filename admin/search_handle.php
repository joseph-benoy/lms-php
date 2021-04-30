<?php
    require "strict.php";
    require "../db.php";
    session_start();
    $search_value = $_POST['search_value'];
    $result = $db->search_book($search_value);
    if($result===false||$result=="0"){
        echo "Nothing found!";
    }else{
        foreach($result as $book){
            echo "<li> Book name = {$book['NAME']} Author name = {$book['AUTHOR']}</li>";
        }
    }
?>