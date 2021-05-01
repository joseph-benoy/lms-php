<?php
    declare(strict_types=1);
    require "../db.php";
    $result = $db->get_all_books();
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