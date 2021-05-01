function getBookDetails(){
    let val = $(`#search`).val();
    let idArray = [];
    if(!val==""){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange =function(){
            if(this.readyState===4&&this.status===200){
                $(`#result_table`).html(this.responseText);
                $(`.result_rows`).each(function(){
                    idArray.push(this.id);
                });
                for(x of idArray){
                    $(`#${x}`).click({book_id:x},openBookDetails);
                }
            }
        };
        xhttp.open(`POST`,`search_handle.php`,true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`search_value=${val}`);
    }
    else{
        $(`#result_table`).html("Search for some book in the library!");
    }
}
function listAllBooks(){
    $(`#search`).val(``);
    let idArray = [];
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =function(){
        if(this.readyState===4&&this.status===200){
            $(`#result_table`).html(this.responseText);
            $(`.result_rows`).each(function(){
                idArray.push(this.id);
            });
            for(x of idArray){
                $(`#${x}`).click({book_id:x},openBookDetails);
            }
        }
    };
    xhttp.open(`GET`,`list_all_books.php`,true);
    xhttp.send();
}
function filterList(){
    let idArray = [];
    let categoryValue = $(`#category_select_filter`).val();
    let authorValue = $(`#author_select_filter`).val();
    if(categoryValue=="Category"){
        categoryValue = "";
    }
    if(authorValue=="Author"){
        authorValue = "";
    }
    if(categoryValue!==""&&authorValue!==""){//both values
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange =function(){
            if(this.readyState===4&&this.status===200){
                $(`#result_table`).html(this.responseText);
                $(`.result_rows`).each(function(){
                    idArray.push(this.id);
                });
                for(x of idArray){
                    $(`#${x}`).click({book_id:x},openBookDetails);
                }
            }
        };
        xhttp.open(`POST`,`filter_search.php`,true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`category_value=${categoryValue}&author_value=${authorValue}&type=1`);
    }
    else if(categoryValue!==""&&authorValue===""){//only category value
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange =function(){
            if(this.readyState===4&&this.status===200){
                $(`#result_table`).html(this.responseText);
                $(`.result_rows`).each(function(){
                    idArray.push(this.id);
                });
                for(x of idArray){
                    $(`#${x}`).click({book_id:x},openBookDetails);
                }
            }
        };
        xhttp.open(`POST`,`filter_search.php`,true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`category_value=${categoryValue}&type=2`);
    }   
    else if(categoryValue===""&&authorValue!==""){//only author value
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange =function(){
            if(this.readyState===4&&this.status===200){
                $(`#result_table`).html(this.responseText);
                $(`.result_rows`).each(function(){
                    idArray.push(this.id);
                });
                for(x of idArray){
                    $(`#${x}`).click({book_id:x},openBookDetails);
                }
            }
        };
        xhttp.open(`POST`,`filter_search.php`,true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`author_value=${authorValue}&type=3`);
    } 
}
$(document).ready(function(){
    $(`#search`).on(`input`,getBookDetails);
    $(`#list_all_btn`).click(listAllBooks);
    $(`#filter_apply_btn`).click(filterList);
});