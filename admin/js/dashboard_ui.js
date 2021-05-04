function displayAdminProfile(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState===4&&this.status===200){
            if(this.responseText!="0"){
                let obj= JSON.parse(this.responseText);
                console.log(obj);
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
