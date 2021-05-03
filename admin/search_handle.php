<?php
    require "strict.php";
    require "../db.php";
    session_start();
    $search_value = $_POST['search_value'];
    $result = $db->search_book($search_value);
    if($result===false||$result=="0"){
        echo "Nothing found!";
    }else{
        echo '<table class="table table-hover">
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