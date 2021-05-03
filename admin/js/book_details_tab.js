function openBookDetails(event){
    $(`#books_tab`).hide();
    $(`#book_details_page`).show();
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState===4&&this.status===200){
            if(this.responseText==="0"){
                document.write("<h2>Error</h2>");
            }
            else{
                let json_obj = JSON.parse(this.responseText);
                console.log(json_obj);
            }
        }
    };
    xhttp.open('POST','get_book.php',true);
    xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
    xhttp.send(`book_id=${event.data.book_id}`);
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
    $(`#change_cover_input`).change(function(event){
        $(`#cover_image_bdp`).attr(`src`,URL.createObjectURL(event.target.files[0]));
    });
}
