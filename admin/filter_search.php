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
    if($result===false||$result=="0"){
        echo "Nothing found!";
    }else{
        echo '<table class="table table-hover" id="result_table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Book</th>
            <th scope="col">Author</th>
          </tr>
        </thead>
        <tbody>';
        $i=1;
        foreach($result as $book){
            echo '<tr class="result_rows" id="'.str_replace(' ','-',$book['ID']).'">
            <th scope="row">'.$i++.'</th>
            <td>'.$book['NAME'].'</td>
            <td>'.$book['AUTHOR'].'</td>
          </tr>';
        }
        echo '</tbody>
        </table>';
    }
?>