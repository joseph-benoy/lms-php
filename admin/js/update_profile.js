$(`#submit_btn_profile`).click(function(){
    let obj = {
        fname:$(`#firstname_input`).val(),
        lname:$(`#lastname_input`).val(),
        email:$(`#email_input`).val(),
        phone:$(`#phone_input`).val(),
        dob:$(`#date_of_birth_input`).val(),
        house:$(`#house_input`).val(),
        street:$(`#street_input`).val(),
        city:$(`#city_input`).val(),
        state:$(`#state_input`).val(),
        country:$(`#country_input`).val(),
        pin:$(`#pin_input`).val()
    };
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState===4&&this.status===200){
            if(this.responseText==="1"){
                console.log("UPDATED!!!!");
            }
            else{
                console.log("oooombi!!");
            }
        }
    };
    xhttp.open(`POST`,'update_admin.php',true);
    xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
    xhttp.send(`obj=${JSON.stringify(obj)}`);
});