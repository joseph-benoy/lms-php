function add_book_modal(dbFlag,imgFlag){
    if(dbFlag&&imgFlag){
        $(`#success_add_book`).modal(`show`);
    }
    else{
        $(`#error_add_book`).modal(`show`);
    }
}
function addNewBook(){
    let dbFlag = true;
    let imgFlag =true;
    let obj = {
        name:`${$(`#bookname_input`).val()}`,
        author:`${$(`#author_input`).val()}`,
        publisher:`${$(`#publisher_input`).val()}`,
        cover_image_location:`${$(`#customFile_books`).val().replace("C:\\fakepath\\","")}`,
        price:`${$(`#price_input`).val()}`,
        category:`${$(`#category_select`).val()}`,
        description:`${$(`#book_description_input`).val()}`,
        stock:`${$(`#stock_input`).val()}`
    };
    let json_obj = JSON.stringify(obj);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState===4&&this.status===200){
            if(this.responseText=="0"){
                dbFlag=false;
            }
        }
    };
    xhttp.open(`POST`,'add_book.php',true);
    xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
    xhttp.send(`json_obj=${json_obj}`);
    var fd = new FormData();
    var files = $('#customFile_books')[0].files;
    if(files.length > 0 ){
        fd.append('file',files[0]);
        $.ajax({
            url: 'add_book.php',
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function(response){
                if(response=="0"){
                    imgFlag = false;
                }
                add_book_modal(dbFlag,imgFlag);
            },
        });
    }
}
$(document).ready(function(){
    $(`#success_add_book_submit`).click(function(){
        $(`#new_book_page`).hide();
        $(`#books_tab`).show();
    });
});