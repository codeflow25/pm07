$(document).ready(function(){
    toggleCheck();
    toggleTodo();
    tabUI(".tabMenu li",".tabPage");
    accControl(".accComponent li h3");
});

function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var $checkStatus = false;

    $checkLabel.click(function(){
        $checkStatus = !$checkStatus;
        if($checkStatus == true){
            $checkTarget.text('check_box');
        }else{
            $checkTarget.text('check_box_outline_blank');
        }
    });
}

function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var $toggleStatus = false;

    $toggleTarget.click(function(){
        $toggleStatus = !$toggleStatus;
        if($toggleStatus == true){
            $toggleTarget.text('visibility');
            $toggleInput.attr('type','text');
        }else{
            $toggleTarget.text('visibility_off');
            $toggleInput.attr('type','password');
        }
    });
}

function tabUI(clicker,target){
    $(clicker).click(function(){
        var activeTab = $(this).attr('data-tabNumb');
        // console.log(activeTab);
        $(clicker).removeClass('activated');
        $(this).addClass('activated');
        $(target).removeClass('activated');
        $("#"+activeTab).addClass('activated');
    });
}

// 과제 accControl toggle event(.toggleClass 사용)
function accControl(target){
    $(target).click(function(){
        $(this).toggleClass('active');
    });
}