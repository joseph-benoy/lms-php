function getBookDetails(){
    let val = $(`#search`).val();
    if(!val==""){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange =function(){
            if(this.readyState===4&&this.status===200){
                $(`#result_table`).html(this.responseText);
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
$(document).ready(function(){
    $(`#search`).on(`input`,getBookDetails);
});