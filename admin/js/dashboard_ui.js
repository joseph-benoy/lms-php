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
}

$(document).ready(function(){
    $(`#navIcon`).click(openMobMenu);
    $(`#menu-close-icon`).click(closeMobMenu);
//tab handling
    $(`#home_btn`).click({tab_name:"home_tab"},openTab);
    $(`#books_btn`).click({tab_name:"books_tab"},openTab);
    $(`#members_btn`).click({tab_name:"members_tab"},openTab);
    $(`#messages_btn`).click({tab_name:"messages_tab"},openTab);
    $(`#requests_btn`).click({tab_name:"requests_tab"},openTab);
    $(`#messages_btn`).click({tab_name:"messages_tab"},openTab);
    $(`#settings_btn`).click({tab_name:"settings_tab"},openTab);
    $(`#profile_btn`).click({tab_name:"profile_tab"},openTab);
    $(`#logout_btn`).click({tab_name:"logout_tab"},openTab);
});