//凹坑不在翼肋上的判断条件
$(function(){

    var $area0Dialog = $('#area0-dialog');
    var $area1Dialog = $('#area1-dialog');
    var $area2Dialog = $('#area2-dialog');
    var $area3Dialog = $('#area3-dialog');
    var $area4Dialog = $('#area4-dialog');
    

    $('#dialogs').on('click', '.weui-dialog__btn', function(){
        $(this).parents('.js_dialog').fadeOut(200);
    });
    
    $('#checkBtn').on('click', function(){
        //$successDialog.fadeIn(200);
        var $length = $('#length').val();
        var $width = $('#width').val();
        var $depth = $('#depth').val();
        var $selectLength = $('#select-length').val();
        if($selectLength == 1){
            $length = $length / 25.4;
        }
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
//AREA1:depth=0.05+0.01*length
//AREA2:depth=2/300*length+0.06
//AREA3:depth=-0.1*length+0.7
//AREA4:depth=-0.9/6*length+1.3
        console.log("长度："+$length+"英寸\n宽度："+$width+"英寸\n深度："+$depth+"英寸");
        if(($length>=0&&$length<=3)&&($depth<=0.01*$length+0.05)){
            console.log("AREA1");
            $area1Dialog.fadeIn(200);
        }else if((($length>3&&$length<=6)&&($depth<=1/150*$length+0.06))||(($length>6&&$length<=8)&&($depth<=0.1))){
            console.log("AREA2");
            $area2Dialog.fadeIn(200);
        }else if( (($length>=0&&$length<=2)&&($depth<=0.5)) || (($length>2&&$length<=6)&&($depth <= (7-$length)/10) )){
            console.log("AREA3");
            $area3Dialog.fadeIn(200);
        }else if((($length>=0&&$length<=2)&&($depth<=1))||(($length>2&&$length<=8)&&($depth <= -0.9/6*$length+1.3))){
            console.log("AREA4");
            $area4Dialog.fadeIn(200);
        }else{
            console.log("区域外");
            $area0Dialog.fadeIn(200);
        }
    });
    
});