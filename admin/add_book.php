<?php 
    declare(strict_types=1);
    require "../db.php";
    if(isset($_POST['json_obj'])){
        $obj = json_decode($_POST['json_obj']);
        if($db->insert_into_table(
            'BOOK_DETAILS',
            {
                $db->create_id('BOOK_DETAILS'),
                
            },
            )){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        echo "Nothing reciceved<br>";
    }
?>