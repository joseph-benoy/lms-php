function openBookDetails(event){
    $(`#books_tab`).hide();
    $(`#book_details_page`).show();
    $(`#back_btn_bdp`).click(function(){
        $(`#book_details_page`).hide();
        $(`#books_tab`).show();
    });
}
