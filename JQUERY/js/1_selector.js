$(document).ready(function(){
    case1Test();
    $("#btnCheck").click(sayHello);
    $("#btnAddBorder").click(addBorder);
    $('#btnTextChange').click(textChange);
});
function case1Test(){
    var $divs = $("div");
    $divs.css("background-color","blue");
}
function sayHello(){
    alert('반갑습니다.');
}
function addBorder(){
    $(".panel").css("border","10px solid green");
}
function textChange(){
    $("#panel2").css({
        "font-size": "25px",
        "font-weight" : "black",
        "color" : "lightblue"
    });
}