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
        var $noPulled = $('#no-pulled')[0].checked;
        var $noCracks = $('#no-cracks')[0].checked;

        if($selectPlace == 1){//翼肋和梁搭接处<
            console.log("翼肋和梁搭接处\n宽度："+$width+"深度："+$depth);
            if($depth <= 0.02 && ($width/$depth)>=30 && $noPulled && $noCracks){
                $successDialog.fadeIn(200);
            }else{
                $failDialog.fadeIn(200);
            }
        }else if($selectPlace == 2){//翼肋和蒙皮搭接处
            console.log("翼肋和蒙皮搭接处\n宽度："+$width+"深度："+$depth);
            if($depth <= 0.03 && ($width/$depth)>=30 && $noPulled && $noCracks){
                $successDialog.fadeIn(200);
            }else{
                $failDialog.fadeIn(200);
            }
        }else{
            $inputDialog.fadeIn(200);
        }
    });
    
});