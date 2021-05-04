function displayBook(book_id){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState===4&&this.status===200){
            if(this.responseText==="0"){
                document.write("<h2>Error</h2>");
            }
            else{
                let json_obj = JSON.parse(this.responseText);
                $(`#book_name_value`).html(json_obj[0]['NAME']);
                $(`#author_name_value`).html(json_obj[0]['AUTHOR']);
                $(`#publisher_name_value`).html(json_obj[0]['PUBLISHER']);
                $(`#price_value`).html(json_obj[0]['PRICE']);
                $(`#category_value`).html(json_obj[0]['CATEGORY']);
                $(`#stock_value`).html(json_obj[0]['STOCK']);
                $(`#cover_image_bdp`).attr(`src`,`uploads/cover_image/${json_obj[0]['COVER_IMAGE_LOCATION']}`);
                $(`#description_value`).html(json_obj[0]['DESCRIPTION']);
                //update modals
                $(`#change_book_input`).val(json_obj[0]['NAME']);
                $(`#rename_author_input`).val(json_obj[0]['AUTHOR']);
                $(`#rename_publisher_input`).val(json_obj[0]['PUBLISHER']);
                $(`#change_price_input`).val(json_obj[0]['PRICE']);
                $(`#change_category_input`).val(json_obj[0]['CATEGORY']);
                $(`#change_stock_input`).val(json_obj[0]['STOCK']);
                $(`#change_description_input`).val(json_obj[0]['DESCRIPTION']);
            }
        }
    };
    xhttp.open('POST','get_book.php',true);
    xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
    xhttp.send(`book_id=${book_id}`);
}
function openBookDetails(event){
    $(`#books_tab`).hide();
    $(`#book_details_page`).show();
    displayBook(event.data.book_id);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =function(){
        if(this.readyState===4&&this.status===200){
            let select_obj = JSON.parse(this.responseText);
            let category_array = select_obj[0];
            for(x of category_array){
                let new_option = $(`<option value="${x}">${x}</option>`);
                $(`#change_category_input`).append(new_option);
            }
        }
    };
    xhttp.open(`GET`,`select_handle.php`,true);
    xhttp.send();
    $(`#back_btn_bdp`).click(function(){
        $(`#book_details_page`).hide();
        $(`#books_tab`).show();
    });
    $(`#author_name_bdp`).click(function(){
        $('#rename_author_modal').modal('show');
    });
    $(`#publisher_name_bdp`).click(function(){
        $('#rename_publisher_modal').modal('show');
    });
    $(`#price_bdp`).click(function(){
        $('#change_price_modal').modal('show');
    });
    $(`#category_bdp`).click(function(){
        $('#change_category_modal').modal('show');
    });
    $(`#description_bdp`).click(function(){
        $('#change_description_modal').modal('show');
    });
    $(`#stock_bdp`).click(function(){
        $('#change_stock_modal').modal('show');
    });
    $(`#book_name_bdp`).click(function(){
        $('#rename_book_modal').modal('show');
    });
    $(`#remove_book_btn`).click({book_id:event.data.book_id},function(event){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                if(this.responseText=="0"){
                    console.log("error");
                }
                else{
                    $(`#book_removal_message`).html(`Successfully removed!`);
                    $(`#book_removal_cancel`).html('Close');
                    $(`#remove_book_btn`).hide();
                    $(`#book_removal_cancel`).click(function(){
                        $(`#book_details_page`).hide();
                        $(`#books_tab`).show();
                        listAllBooks();
                        $(`#remove_book_btn`).show();
                        $(`#book_removal_message`).html(`Are you sure?`);
                        $(`#book_removal_cancel`).html('Cancel');
                    });
                }
            }
        };
        xhttp.open(`POST`,'remove_book.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`book_id=${event.data.book_id}`);
    });
    $(`#change_book_submit`).click({book_id:event.data.book_id},function(event){
        let value = $(`#change_book_input`).val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                if(this.responseText==="1"){
                    displayBook(event.data.book_id);
                    $(`#change_book_input`).css(`color`,`grey`);
                }
                else{
                    $(`#change_book_input`).css(`color`,`crimson`);
                    $(`#rename_book_modal`).modal(`show`);
                }
            }
        };
        xhttp.open(`POST`,'update_book.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`book_id=${event.data.book_id}&column_name=NAME&value=${value}&type=s`);
    });
    $(`#change_author_submit`).click({book_id:event.data.book_id},function(event){
        let value = $(`#rename_author_input`).val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                if(this.responseText==="1"){
                    displayBook(event.data.book_id);
                    $(`#rename_author_input`).css(`color`,`grey`);
                }
                else{
                    $(`#rename_author_input`).css(`color`,`crimson`);
                    $(`#rename_author_modal`).modal(`show`);
                }
            }
        };
        xhttp.open(`POST`,'update_book.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`book_id=${event.data.book_id}&column_name=AUTHOR&value=${value}&type=s`);
    });
    $(`#change_publisher_submit`).click({book_id:event.data.book_id},function(event){
        let value = $(`#rename_publisher_input`).val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                if(this.responseText==="1"){
                    displayBook(event.data.book_id);
                    $(`#rename_publisher_input`).css(`color`,`grey`);
                }
                else{
                    $(`#rename_publisher_input`).css(`color`,`crimson`);
                    $(`#rename_publisher_modal`).modal(`show`);
                }
            }
        };
        xhttp.open(`POST`,'update_book.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`book_id=${event.data.book_id}&column_name=PUBLISHER&value=${value}&type=s`);
    });
    $(`#change_price_submit`).click({book_id:event.data.book_id},function(event){
        let value = $(`#change_price_input`).val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                if(this.responseText==="1"){
                    displayBook(event.data.book_id);
                    $(`#change_price_input`).css(`color`,`grey`);
                }
                else{
                    $(`#change_price_input`).css(`color`,`crimson`);
                    $(`#change_price_modal`).modal(`show`);
                }
            }
        };
        xhttp.open(`POST`,'update_book.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`book_id=${event.data.book_id}&column_name=PRICE&value=${value}&type=i`);
    });
    $(`#change_category_submit`).click({book_id:event.data.book_id},function(event){
        let value = $(`#change_category_input`).val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                if(this.responseText==="1"){
                    displayBook(event.data.book_id);
                    $(`#change_category_input`).css(`color`,`grey`);
                }
                else{
                    $(`#change_category_input`).css(`color`,`crimson`);
                    $(`#change_category_modal`).modal(`show`);
                }
            }
        };
        xhttp.open(`POST`,'update_book.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`book_id=${event.data.book_id}&column_name=CATEGORY&value=${value}&type=s`);
    });
    $(`#change_description_submit`).click({book_id:event.data.book_id},function(event){
        let value = $(`#change_description_input`).val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                if(this.responseText==="1"){
                    displayBook(event.data.book_id);
                    $(`#change_description_input`).css(`color`,`grey`);
                }
                else{
                    $(`#change_description_input`).css(`color`,`crimson`);
                    $(`#change_description_modal`).modal(`show`);
                }
            }
        };
        xhttp.open(`POST`,'update_book.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`book_id=${event.data.book_id}&column_name=DESCRIPTION&value=${value}&type=s`);
    });
    $(`#change_stock_submit`).click({book_id:event.data.book_id},function(event){
        let value = $(`#change_stock_input`).val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                if(this.responseText==="1"){
                    displayBook(event.data.book_id);
                    $(`#change_stock_input`).css(`color`,`grey`);
                }
                else{
                    $(`#change_stock_input`).css(`color`,`crimson`);
                    $(`#change_stock_modal`).modal(`show`);
                }
            }
        };
        xhttp.open(`POST`,'update_book.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`book_id=${event.data.book_id}&column_name=STOCK&value=${value}&type=i`);
    });
    $(`#cover_image_bdp`).click(function(){
        $(`#change_cover_modal`).modal(`show`);
    });
    $('#change_cover_input').change(function(){
        let value = $(`#change_cover_input`).val().replace("C:\\fakepath\\","");
        if(value!==""){
            $(`#change_cover_label`).html(value);
        }
    });
    $(`#change_cover_submit`).click({book_id:event.data.book_id},function(event){
        let imgFlag =true;
        let fd1 = new FormData();
        let file = $('#change_cover_input')[0].files;
        if(file.length > 0 ){
            fd1.append('file',file[0]);
            $.ajax({
                url: 'add_book.php',
                type: 'post',
                data: fd1,
                contentType: false,
                processData: false,
                success: function(response){
                    if(response=="0"){
                        imgFlag = false;
                        console.log("Img stored = 0");
                    }
                    else{
                        console.log("Img stored = 1");
                    }
                },
            });
        }
        if(imgFlag){
            let value = $(`#change_cover_input`).val().replace("C:\\fakepath\\","");
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState===4&&this.status===200){
                    if(this.responseText==="1"){
                        displayBook(event.data.book_id);
                    }
                    else{
                        $(`#change_cover_input`).css(`color`,`crimson`);
                        $(`#change_cover_modal`).modal(`show`);
                    }
                }
            };
            xhttp.open(`POST`,'update_book.php',true);
            xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
            xhttp.send(`book_id=${event.data.book_id}&column_name=COVER_IMAGE_LOCATION&value=${value}&type=s`);
        }
        else{
            $(`#change_cover_input`).css(`color`,`crimson`);
            $(`#change_cover_modal`).modal(`show`);
        }
    });
}
