$(document).ready(function() {
    $(".enter__city button").click(function(){
        if ($(this).hasClass("js-act")) {
            $(this).removeClass("js-act");
            $(this).children(".drop-down").fadeOut();
        }
        else {
            $(this).addClass("js-act");
            $(this).children(".drop-down").fadeIn();
        }
    });
});