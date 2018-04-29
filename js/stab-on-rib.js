//凹坑在翼肋上的判断条件
$(function(){

    var $successDialog = $('#success-dialog');
    var $failDialog = $('#fail-dialog');
    var $inputDialog = $('#input-dialog');
    

    $('#dialogs').on('click', '.weui-dialog__btn', function(){
        $(this).parents('.js_dialog').fadeOut(200);
    });
    
    $('#checkBtn').on('click', function(){
        console.log($('#select-place').val(),$('#width').val(),$('#depth').val(),$('#select-width').val(),$('#select-depth').val());
        console.log($('#no-pulled')[0].checked);
        console.log($('#no-cracks')[0].checked);
        //$successDialog.fadeIn(200);
        var $selectPlace = $('#select-place').val();
        var $width = $('#width').val();
        var $depth = $('#depth').val();
        var $selectWidth = $('#select-width').val();
        var $selectDepth = $('#select-depth').val();
        var $noPulled = $('#no-pulled')[0].checked;
        var $noCracks = $('#no-cracks')[0].checked;

        if($selectPlace == 1){
            
        }else if($selectPlace == 2){

        }else{
            $inputDialog.fadeIn(200);
        }
    });
    
});