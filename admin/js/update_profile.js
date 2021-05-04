function displayAdminProfile(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState===4&&this.status===200){
            if(this.responseText!="0"){
                let obj= JSON.parse(this.responseText);
                
            }
        }
    };
    xhttp.open(`GET`,'display_admin_profile.php',true);
    xhttp.send();
}