
$(function(){

var $teamInfo = $('#teamInfo');


$('#dialogs').on('click', '.weui-dialog__btn', function(){
$(this).parents('.js_dialog').fadeOut(200);
});

$('#showTeamInfo').on('click', function(){
$teamInfo.fadeIn(200);
});

});