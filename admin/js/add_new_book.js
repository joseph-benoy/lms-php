function addNewBook(){
      let obj = {
        name:`${$(`#bookname_input`).val()}`,
        author:`${$(`#author_input`).val()}`,
        publisher:`${$(`#publisher_input`).val()}`,
        cover_image_location:`48_power.jpg`,
        price:`${$(`#price_input`).val()}`,
        category:`${$(`#category_select`).val()}`,
        description:`${$(`#customFile_books`).val().replace("C:\\fakepath\\","")}`,
        stock:`${$(`#stock_input`).val()}`
    };
    let json_obj = JSON.stringify(obj);
    console.log(json_obj);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState===4&&this.status===200){
            console.log(this.responseText);
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
                console.log("Filllllllle senttttttttttttt!");
                console.log(response);
            },
        });
    }
}