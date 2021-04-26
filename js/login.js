function checkUsername(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState===4&&this.response===200){
            console.log(this.responseText);
        }
    };
    xhttp.open(`POST`,'auth.php',true);
    xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
    xhttp.send(`email=${$(`#uname`).val()}`);
}
$(document).ready(function(){
    $(`#uname`).focusout(checkUsername);

});