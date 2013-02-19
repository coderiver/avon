$(document).ready(function() {
// ---------------- Datapicker -------------------------- //
    $(function() {
        $( ".js-date" ).datepicker();
    });
    // ---------------- Chose city  drop-list-------------------------- //
    $(".choose button").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).children(".drop-down").fadeOut();
        }
        else {
            $(this).addClass("active");
            $(this).children(".drop-down").fadeIn();
        }
    });

// ---------------- Chose Other city -------------------------- //
    $(".drop-down li").click(function(){
        var val = $(this).text();
        $(this).parent().parent().prev().text(val);
    });


// ----------------  init cycle plugin -------------------------- //
    $(".coach-scroll .scroll").cycle({ 
        fx:      'scrollHorz',
        next:    ".coach-scroll .next", 
        prev:    ".coach-scroll .prev", 
        timeout:  0,
        speed: 700
    });

    $(".slider .scroll-main").cycle({ 
        timeout:  0,
        speed: 1000,
        pager:  '.slider-nav',
        pagerAnchorBuilder: function(index, el) {
            return '<button class=nav-' + index + '><i></i><span></span></button>'; // whatever markup you want
        }
    });
    $(".nav-0 span").text("Тренера");
    $(".nav-1 span").text("Тренинги");
    $(".nav-2 span").text("Галерея");

    $(".img-scroll .scroll").cycle({ 
        timeout:  0,
        speed: 1000,
        timeout:  2000,
        pager:  '.img-scroll__nav',
        pagerAnchorBuilder: function(index, el) {
            return '<button></button>'; // whatever markup you want
        }
    });

// ---------------- close popup -------------------------- //
$(".close").click(function(){
    $(this).parent().fadeOut();
    $(".overlay").fadeOut();
});

// ---------------- Add comment popup -------------------------- //
$(".js-add-comment").click(function(){
    $(".popup_add-comment").fadeIn();
    $(".overlay").fadeIn();
});

// ---------------- More -------------------------- //
    $(".js-more").hide();
    $(".more span").click(function(){
        $(this).hide();
        $(this).parent().prev().slideDown();
    });
    $(".gallery .more span").click(function(){
        $(this).hide();
        $(this).parent().parent().children(".js-more").slideDown();
    });
    $(".training-item-wrap .more span").click(function(){
        $(this).hide();
        $(this).parent().parent().parent().children(".js-more").slideDown();
    });
// ---------------- Choose city  drop-list-------------------------- //
    $(".select button").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).parent().removeClass("select_active");
            $(this).children(".drop-down").fadeOut();
        }
        else {
            $(this).addClass("active");
            $(this).parent().addClass("select_active");
            $(this).children(".drop-down").fadeIn();
        }
    });   

// ---------------- Checkbox -------------------------- //
    $(".checkbox").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
        }
    });  

// ---------------- Choose city  drop-list-------------------------- //
$(".switch label").children("span:first").addClass("active");
$(".switch label").click(function(){
    if ($(this).children().children("input:checked").length > 0) {
        $(this).children().children("input").removeAttr("checked");
        $(this).children("span:first").addClass("active");
        $(this).children().next().next().removeClass("active");
    }
    else {
        $(this).children().children("input").attr("checked", "checked");
        $(this).children().removeClass("active");
        $(this).children().next().next().addClass("active");
    }
});

// ---------------- fancybox  -------------------------- //
    $(".gallery a").fancybox({
        // insert parameters here
    });

// ---------------- Tab -------------------------- //
    $(".tab-cont").hide();
    $(".tab-1").show();
    $(".tab li").click(function(){
        $(".tab li").removeClass("active");
        $(this).addClass("active");
        var act = $(this).attr("data-tab");
        $(".tab-cont").hide();
        $(act).fadeIn();
    });

});