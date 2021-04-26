function checkUsername(){
    console.log("USER NAME CHECKING!!!");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState===4&&this.status===200){
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