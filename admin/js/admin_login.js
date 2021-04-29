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
    if(!($(`uname`).val()==="")){
        console.log("USER NAME CHECKING!!!");
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                console.log(this.responseText);
               if(this.responseText=="0"){   
                    unameFlag(false);
                }
                else{
                    $(`#password`).prop(`disabled`,false);
                    unameFlag(true);
                }
            }
        };
        xhttp.open(`POST`,'admin/auth.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`email=${$(`#uname`).val()}`);
    }
}
function checkPassword(){
    if(!($(`uname`).val()===""||$(`#password`).val()===""||unameFlag()===false)){
        console.log("PASSWORD CHECKING!!!!!!!!!!");
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState===4&&this.status===200){
                console.log(this.responseText);
                if(this.responseText=="0"){
                    passFlag(false);
                }
                else{
                    unameFlag(true);
                    passFlag(true);
                }
            }
        };
        xhttp.open(`POST`,`admin/auth.php`,true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`email=${$(`#uname`).val()}&password=${$(`#password`).val()}`);
    }
}
function validateForm(){
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
    $(`#uname`).focusout(checkUsername);
    $(`#password`).focusout(checkPassword);
    $(`#password_toggle`).click(togglePassword);
});