$(function(){
    // case.1 x Axis 움직임
    $("#btnMoveCircle").click(moveCircle);
    // case.2 x, y Axis 움직임
    detailMoveCircleExt();
    // case.3 방향키 조작
    keyControl();
});
function moveCircle(){
    var $circle = $(".circle");
    var xpos = prompt("0부터 380까지의 숫자만 입력하세요.");
    xpos = parseInt(xpos);

    if(xpos>=0 && xpos<=380){
        $circle.css('left',xpos);
    }else{
        alert('잘못된 수치입니다.');
    }
}
function detailMoveCircleExt(){
    var $circle = null;
    circleInit();
    $("#btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();

    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    circleMoveCommand(xpos,ypos);
}
function circleMoveCommand(xpos,ypos){
    if(xpos>=0 && xpos<=380 && ypos>=0 && ypos <= 380){
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert('잘못된 수치입니다.');
    }
}

function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("현재 입력한 키는 : " + typeof(e.keyCode) + e.keyCode);
        // 위(Ypos -): 87, 오른쪽(Xpos +): 68, 아래(Ypos +): 83, 왼쪽(Xpos -): 65
        switch(e.keyCode){
            case 87:
                currentYpos -= range;
                break;
            case 68:
                currentXpos += range;
                break;
            case 83:
                currentYpos += range;
                break;
            case 65:
                currentXpos -= range;
                break;
        }
        // 과제 조건 : x, y가 0보다 작을때, x, y과 380보다 클 때 좌표처리하기.
        if(currentXpos <= 0){
            currentXpos = 0;
        }
        if(currentXpos >= 380){
            currentXpos = 380;
        }
        if(currentYpos <= 0){
            currentYpos = 0;
        }
        if(currentYpos >= 380){
            currentYpos = 380;
        }

        $circle.css({
            "left" : currentXpos,
            "top" : currentYpos
        });

    });
}