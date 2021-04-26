function checkUsername(){
    if(!($(`uname`).val()==="")){
        console.log("USER NAME CHECKING!!!");
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                console.log(this.responseText);
    /*           if(this.responseText=="0"){    //enable during front end
                    $(`#password`).val("");
                    $(`#password`).prop(`disabled`,true);
                }
                else{
                    $(`#password`).prop(`disabled`,false);
                }*/
            }
        };
        xhttp.open(`POST`,'auth.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`email=${$(`#uname`).val()}`);
    }
}
function checkPassword(){
    if(!($(`uname`).val()===""||$(`#password`).val()==="")){
        console.log("PASSWORD CHECKING!!!!!!!!!!");
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                console.log(this.responseText);
            }
        };
        xhttp.open(`POST`,`auth.php`,true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`email=${$(`#uname`).val()}&password=${$(`#password`).val()}`);
    }
}
$(document).ready(function(){
//    $(`#password`).prop(`disabled`,true);
    $(`#uname`).focusout(checkUsername);
});