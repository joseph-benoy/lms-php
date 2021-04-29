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
    closeMobMenu();
}
function toggleAddNewBookPage(){
    $(`#new_book_page`).toggle();
    $(`#books_tab`).toggle();
}
function showFileName(){
    let file_name = $(`#customFile`).val().replace("C:\\fakepath\\","");
    if(!(file_name===undefined||file_name==="")){
        $(`#file_name_label`).html(file_name);
    }
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
    $(`#customFile`).change(showFileName);
});
