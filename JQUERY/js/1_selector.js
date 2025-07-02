$(document).ready(function(){
    case1Test();
    $("#btnCheck").click(sayHello);
    $("#btnAddBorder").click(addBorder);
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