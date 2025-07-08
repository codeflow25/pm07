$(function(){
    gallery(0,200,200);
    $(".1way").click(function(){gallery(1,1000,1000)});
});
function gallery(count, imgWidth, imgHeight){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var xpos, ypos;


}