<?php
    require "strict.php";
    function store_image($field_name,$location){
        $target = $image_size = $image_type = null;
        if(isset($_FILES[$field_name])){
            $target = $location."/".basename($_FILES[$field_name]['name']);
            $image_type = strtolower(pathinfo($_FILES[$field_name]['name'],PATHINFO_EXTENSION));
            $image_size = $_FILES[$field_name]['size'];
            if(isset($_POST['verify'])){
                $check = getimagesize($_FILES[$field_name]['tmp_name']);
                if(!$check){
                    return 0;
                }
            }
            if(file_exists($target)){
                return 0;
            }
            if($image_size>2048000){
                return 0;
            }
            if(!($image_type==='jpeg'||$image_type=='jpg'||$image_type=='png')){
                return 0;
            }
            else{
                return move_uploaded_file($_FILES[$field_name]['tmp_name'],$target);
            }
        }
    }
    
?>