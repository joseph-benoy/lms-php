let unameFlag = function(){
    let uflag = false;
    return function(flag=null){
        if(flag===null){
            return uflag;
        }
        else{
            uflag = flag;
            return uflag;
        }
    }
}();
let passFlag = function(){
    let pFlag = false;
    return function(flag=null){
        if(flag===null){
            return pFlag;
        }
        else{
            pFlag = flag;
            return pFlag;
        }
    }
}();
function checkUsername(){
    if(!($(`#email_input`).val()==="")){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                console.log(this.responseText);
               if(this.responseText=="0"){   
                    unameFlag(false);
                    $(`#uname_failed`).show();
                    $(`#uname_success`).hide();
                }
                else{
                    $(`#password_input`).prop(`disabled`,false);
                    unameFlag(true);
                    $(`#uname_success`).show();
                    $(`#uname_failed`).hide();
                }
            }
        };
        xhttp.open(`POST`,'admin/auth.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`email=${$(`#email_input`).val()}`);
    }
}
function checkPassword(){
    if(!($(`#email_input`).val()===""||$(`#password_input`).val()===""||unameFlag()===false)){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                console.log(this.responseText);
                if(this.responseText=="0"){
                    passFlag(false);
                    $(`#password_failed`).show();
                    $(`#password_success`).hide();
                }
                else{
                    unameFlag(true);
                    passFlag(true);
                    $(`#password_success`).show();
                    $(`#password_failed`).hide();
                }
            }
        };
        xhttp.open(`POST`,`admin/auth.php`,true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`email=${$(`#email_input`).val()}&password=${$(`#password_input`).val()}`);
    }
}
function validateForm(){
    checkUsername();
    checkPassword();
    if(unameFlag()&&passFlag()){
        return true;
    }
    else{
        return false;
    }
}
function togglePassword(){
    let type = $(`#password_input`).attr(`type`);
    if(!(type===undefined||type=="text")){
        $(`#password_input`).attr(`type`,`text`);
    }
    else{
        $(`#password_input`).attr(`type`,`password`);
    }
}
$(document).ready(function(){
    $(`#email_input`).focusout(checkUsername);
    $(`#password_input`).focusout(checkPassword);
    $(`#password_toggle`).click(togglePassword);
});