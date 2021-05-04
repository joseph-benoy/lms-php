function displayAdminProfile(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState===4&&this.status===200){
            if(this.responseText!="0"){
                let obj= JSON.parse(this.responseText);
                $(`#firstname_input`).val(obj[0]['FNAME']);
                $(`#lastname_input`).val(obj[0]['LNAME']);
                $(`#email_input`).val(obj[0]['EMAIL']);
                $(`#phone_input`).val(obj[0]['PHONE']);
                $(`#date_of_birth_input`).val(obj[0]['DOB']);
                $(`#house_input`).val(obj[0]['HOUSE']);
                $(`#street_input`).val(obj[0]['STREET']);
                $(`#city_input`).val(obj[0]['CITY']);
                $(`#state_input`).val(obj[0]['STATE']);
                $(`#country_input`).val(obj[0]['COUNTRY']);
                $(`#pin_input`).val(obj[0]['PIN']);
                $(`#admin_avatar`).attr(`src`,`uploads/profile_pic/${obj[0]['IMAGE_LOCATION']}`);
            }
        }
    };
    xhttp.open(`GET`,'display_admin_profile.php',true);
    xhttp.send();
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
                console.log(this.responseText);
                if(this.responseText!="0"){
                    $(`#update_success_modal`).modal(`show`);
                }
                else{
                    $(`#update_failure_modal`).modal(`show`);
                }
            }
        };
        xhttp.open(`POST`,'update_admin.php',true);
        xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
        xhttp.send(`obj=${JSON.stringify(obj)}`);
    });
    $(`#update_avatar_input`).change(function(){
        $(`#update_avatar_label`).html($(`#update_avatar_input`).val().replace("C:\\fakepath\\",""));
    });
    $(`#admin_avatar`).click(function(){
        $(`#update_avatar_modal`).modal(`show`);
    });
    $(`#update_avatar_submit`).click(function(){
        let imgFlag =true;
        let fd1 = new FormData();
        let file = $('#update_avatar_input')[0].files;
        if(file.length > 0 ){
            fd1.append('file',file[0]);
            $.ajax({
                url: 'add_book.php',
                type: 'post',
                data: fd1,
                contentType: false,
                processData: false,
                success: function(response){
                    if(response=="0"){
                        imgFlag = false;
                    }
                    else{
                        imgFlag = true;
                    }
                },
            });
        }
        if(imgFlag){
            let value = $(`#update_avatar_input`).val().replace("C:\\fakepath\\","");
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState===4&&this.status===200){
                    if(this.responseText==="1"){
                        displayAdminProfile();
                    }
                    else{
                        $(`#update_cover_input`).css(`color`,`crimson`);
                        $(`#update_cover_modal`).modal(`show`);
                    }
                }
            };
            xhttp.open(`POST`,'update_avatar.php',true);
            xhttp.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`);
            xhttp.send(`value=${value}`);
        }
        else{
            $(`#update_avatar_input`).css(`color`,`crimson`);
            $(`#update_avatar_modal`).modal(`show`);
        }
    });
}
function closeMobMenu(){
    $(`#mob_menu`).hide();
}
function openMobMenu(){
    $(`#mob_menu`).show();
}
function closeTabExcept(tab_name){
    $(`#tab_containter`).children().not(`#${tab_name}`).hide();
    $(`.side_nav_active`).removeClass(`side_nav_active`);
}
function openTab(event){
    let tab_name = event.data.tab_name;
    $(`#${tab_name}`).show();
    closeTabExcept(tab_name);
    $(this).addClass(`side_nav_active`);
    if(tab_name==="books_tab"){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange =function(){
            if(this.readyState===4&&this.status===200){
                let select_obj = JSON.parse(this.responseText);
                let category_array = select_obj[0];
                let author_array = select_obj[1];
                for(x of category_array){
                    let new_option = $(`<option value="${x}">${x}</option>`);
                    $(`#category_select_filter`).append(new_option);
                }
                for(x of author_array){
                    let new_option = $(`<option value="${x}">${x}</option>`);
                    $(`#author_select_filter`).append(new_option);
                }
            }
        };
        xhttp.open(`GET`,`select_handle.php`,true);
        xhttp.send();
    }
    if(tab_name==="profile_tab"){
        displayAdminProfile();
    }
    $(`#new_book_submit`).click(addNewBook);
    closeMobMenu();
}
function toggleAddNewBookPage(){
    $(`#new_book_page`).toggle();
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =function(){
        if(this.readyState===4&&this.status===200){
            let category_array = JSON.parse(this.responseText);
            for(x of category_array){
                let new_option = $(`<option value="${x}">${x}</option>`);
                $(`#category_select`).append(new_option);
            }
        }
    };
    xhttp.open(`GET`,`get_categories.php`,true);
    xhttp.send();
    $(`#books_tab`).toggle();
}
function showFileName(){
    let file_name = $(`#customFile_books`).val().replace("C:\\fakepath\\","");
    if(!(file_name===undefined||file_name==="")){
        $(`#file_name_label`).html(file_name);
    }
}
function togglePassword(){
    if($(`#current_password`).attr(`type`)=="text"){
        $(`#current_password`).attr(`type`,`password`);
        $(`#new_password`).attr(`type`,`password`);
        $(`#confirm_new_password`).attr(`type`,`password`);
    }
    else{
        $(`#current_password`).attr(`type`,`text`);
        $(`#new_password`).attr(`type`,`text`);
        $(`#confirm_new_password`).attr(`type`,`text`);
    }
}
function closeProfileTab(){
    $(`#profile_tab`).toggle();
    let tab_name = `home_tab`;//change to redirect from discard profile tab;
    $(`#${tab_name}`).show();
    closeTabExcept(tab_name);
    $(`#home_btn`).addClass(`side_nav_active`);
    closeMobMenu();
}
function changeAvatar(event){
    $(`#admin_avatar`).attr(`src`,URL.createObjectURL(event.target.files[0]));
}
$(document).ready(function(){
    $(`#navIcon`).click(openMobMenu);
    $(`#menu-close-icon`).click(closeMobMenu);
//tab handling desktop
    $(`#home_btn`).click({tab_name:"home_tab"},openTab);
    $(`#books_btn`).click({tab_name:"books_tab"},openTab);
    $(`#members_btn`).click({tab_name:"members_tab"},openTab);
    $(`#messages_btn`).click({tab_name:"messages_tab"},openTab);
    $(`#requests_btn`).click({tab_name:"requests_tab"},openTab);
    $(`#messages_btn`).click({tab_name:"messages_tab"},openTab);
    $(`#settings_btn`).click({tab_name:"settings_tab"},openTab);
    $(`#profile_btn`).click({tab_name:"profile_tab"},openTab);
    $(`#logout_btn`).click({tab_name:"logout_tab"},openTab);
//tab handling mobile
    $(`#home_btn_mob`).click({tab_name:"home_tab"},openTab);
    $(`#books_btn_mob`).click({tab_name:"books_tab"},openTab);
    $(`#members_btn_mob`).click({tab_name:"members_tab"},openTab);
    $(`#messages_btn_mob`).click({tab_name:"messages_tab"},openTab);
    $(`#requests_btn_mob`).click({tab_name:"requests_tab"},openTab);
    $(`#messages_btn_mob`).click({tab_name:"messages_tab"},openTab);
    $(`#settings_btn_mob`).click({tab_name:"settings_tab"},openTab);
    $(`#profile_btn_mob`).click({tab_name:"profile_tab"},openTab);
    $(`#logout_btn_mob`).click({tab_name:"logout_tab"},openTab);
//add new book page handler
    $(`#add_book_btn`).click(toggleAddNewBookPage);
    $(`#discard_btn`).click(toggleAddNewBookPage);
    $(`#customFile_books`).change(showFileName);
//profile tab handler
    $(`#inlineCheckbox1`).change(togglePassword);
    $(`#discard_btn_profile`).click(closeProfileTab);
    $(`#avatar_file`).change(changeAvatar);

});
