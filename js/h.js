//凹坑在翼肋上的判断条件
$(function(){

    var $successDialog = $('#success-dialog');
    var $failDialog = $('#fail-dialog');
    var $inputDialog = $('#input-dialog');
    

    $('#dialogs').on('click', '.weui-dialog__btn', function(){
        $(this).parents('.js_dialog').fadeOut(200);
    });
    
    $('#checkBtn').on('click', function(){
        //$successDialog.fadeIn(200);
        var $selectPlace = $('#select-place').val();
        var $width = $('#width').val();
        var $depth = $('#depth').val();
        var $selectWidth = $('#select-width').val();
        if($selectWidth == 1){
            $width = $width / 25.4;
        }
        var $selectDepth = $('#select-depth').val();
        if($selectDepth == 1){
            $depth = $depth / 25.4;
        }

            console.log("翼肋和蒙皮搭接处\n宽度："+$width+"深度："+$depth);
            if($depth <= 0.125 && ($width/$depth)>=30){
                $successDialog.fadeIn(200);
            }else{
                $failDialog.fadeIn(200);
            }

    });
    
});