<?php 
    declare(strict_types=1);
    require "../db.php";
    require "../img_handler.php";
    if(isset($_POST['json_obj'])){
        $obj = json_decode($_POST['json_obj']);
        $value_array = [$db->create_id('BOOK_DETAILS'),$obj->name,$obj->author,$obj->publisher,$obj->cover_image_location,$obj->price,$obj->category,$obj->description,$obj->stock];
        if($db->insert_into_table('BOOK_DETAILS',$value_array,'ssssssssi')){
            echo "1";
        }
        else{
            echo "0";
        }
    }
    if(isset($_FILES['file']['name']))
    {
        if(store_image('file','uploads/cover_image')){
            echo "1";
        }
        else{
            echo "0";
        }
    }
?>