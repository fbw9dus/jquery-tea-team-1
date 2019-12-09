$(document).ready(function(){
    $('.submit').click(function(){
        $('.modal').css("display","block");
    $('.modal-close').click(function(){
        $('.modal').css("display","none");
    })
    })
})

$(document).ready(function(){
    $('.teapot').click(function(){
        $(this).toggleClass("rotate");
    });
});

$(".selection__option")
.mouseover(function(){
    $(this).find("p").text("sadsdsadsadsad");
})
.mouseout(function(){
    $(this).find("p").text("");
});