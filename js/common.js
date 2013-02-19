$(document).ready(function() {
// ---------------- Datapicker -------------------------- //
    $(function() {
        $( ".js-date" ).datepicker({
            showOn: '.btn',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            //minDate: 0
            showOtherMonths: true,
            selectOtherMonths: true
        })
    //     .hide()
    //     .click(function() {
    //       $(this).hide();
    //     });
    //     $(".btn").click(function() {
    //    $(".js-dater").show(); 
    // });
    });
    
    // $(".js-date").hover(
    //   function () {
    //     $(this).children(".ui-datepicker-inline").fadeIn();
    //   }, 
    //   function () {
    //     $(this).children(".ui-datepicker-inline").fadeOut();
    //     $(this).children(".ui-datepicker-inline").fadeOut();
    //   }
    // );
    // ---------------- Chose city  drop-list-------------------------- //
    $(".choose__wrap").click(function(){
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

    $(".coach-list-scroll").cycle({ 
        fx:     'scrollVert', 
        next:    ".coach-nav_next", 
        prev:    ".coach-nav_prev", 
        timeout:  0,
        speed: 2000
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
    $(".select__wrap").click(function(){
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
$(".switch div").children("span:first").addClass("active");
$(".switch div").click(function(){
    if ($(this).hasClass("switch-active")) {
        $(this).removeClass("switch-active");
        $(this).children("span:first").addClass("active");
        $(this).children().next().next().removeClass("active");
    }
    else {
        $(this).addClass("switch-active");
        $(this).children().removeClass("active");
        $(this).children().next().next().addClass("active");
    }
});

// ---------------- Input drop-list -------------------------- //
    // show/hide
    $(".input_drop-down").focusin(function(){
        $(this).next().fadeIn("fast");
    });
    $(".input_drop-down").focusout(function(){
        $(this).next().fadeOut("fast");
    });
    // get text
    $(".input-drop-down li").click(function(){
        var text = $(this).text();
        $(this).parent().prev().val(text);
    });

// ---------------- fancybox  -------------------------- //
    // $(".gallery a").fancybox({
    //     // insert parameters here
    // });

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
// ---------------- Sort -------------------------- //
    $(".filter-tab li:first").addClass("active");
    $(".filter-tab li").click(function(){
        $(".filter-tab li").removeClass("active");
        $(this).addClass("active");
    });

// ---------------- Sort media -------------------------- //
    $(".tab-btn li:first").addClass("active");
    $(".tab-btn li").click(function(){
        $(".tab-btn li").removeClass("active");
        $(this).addClass("active");
    });

// ---------------- Gallery -------------------------- //
    $(".gallery-link").click(function(){
        $(".popup_album").fadeIn();
        $(".overlay-album").fadeIn();
    });
    $(".gallery img").click(function(){
        var img = $(this).parent().attr("data-img");
        $(".popup_photo img").attr("src", img);
        $(".popup_photo").fadeIn();
        $(".overlay_photo").fadeIn();
    });
    $(".popup_album .close").click(function(){
        $(".popup_album").fadeOut();
        $(".overlay-album").fadeOut();
    });
    $(".popup_photo .close").click(function(){
        $(".popup_photo").fadeOut();
        $(".overlay_photo").fadeOut();
    });

});