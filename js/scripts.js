$(function(){
    $(".menu>li").mouseenter(function(){
       $(this).children(".sub").stop().slideDown();
    });
    $(".menu>li").mouseleave(function(){
        $(this).children(".sub").stop().slideUp();
    });
});

$(function(){
    $(".board>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
});