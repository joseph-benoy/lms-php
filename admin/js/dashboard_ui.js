function closeMobMenu(){
    $(`#mob_menu`).hide();
}
function openMobMenu(){
    $(`#mob_menu`).show();
}
$(document).ready(function(){
    $(`#navIcon`).click(openMobMenu);
    $(`#menu-close-icon`).click(closeMobMenu);
});