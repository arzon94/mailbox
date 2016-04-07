// js
$(document).ready(function(){
    $("a").mouseenter(function(){
        $(".header").fadeTo("slow", 0.6);
        ("a").animate({fontSize: '3em'});
    });
    $("a").mouseleave(function(){
        $(".header").fadeTo("slow", 1);
    });
});
