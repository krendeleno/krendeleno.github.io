$(function () {
    if ($(window ).width() <= 600) {
        $(".back").bind("click", trip);
        $("li").bind("click", trip);
    }

    $(window).resize(function() {
        if ($(window ).width() <= 600) {
            $(".back").bind("click", trip);
            $("li").bind("click", trip);
        }
        if ($(window ).width() > 600) {
            $(".column1").css("display", "block");
            $(".column2").css("display", "flex");
            $(".back").unbind("click", trip);
            $("li").unbind("click", trip);
        }
    });

    //Стихи
    prev = 1;
    $(".a").click(function () {
        n = $(this).attr("class").substring(3);
        if (prev == n)
            return;
        $("#" + prev).css("display", "none");
        $("#" + n).css("display", "block");
        prev = n;
    });

    // Выпадающее верхнее меню
    $(window).scroll(function(event) {
        if ($(this).scrollTop () > $(window ).height() * 0.1 && $(window ).width() > 600) {
            $(".scroll_menu").slideDown();
            return false;
        }
        else {
            $(".scroll_menu").slideUp();
        }
    });

    function  transition () {
        $(".column1").css("display", "none");
        $(".column2").css("display", "flex");
        $(".column1").removeClass("animate__fadeOutLeft");
    }

    function reverse_transition () {
        $(".column2").css("display", "none");
        $(".column1").css("display", "block");
        $(".column2").removeClass("animate__fadeOutLeft");
    }

    function crutch() {
        $(".column1").removeClass("animate__fadeInLeft");
    }

    function trip() {
        if ($(".column1").css("display") != "none") {
            $(".column1").addClass("animate__fadeOutLeft");
            $(".column2").addClass("animate__fadeInRight");
            setTimeout(transition, 500);
            $(".column2").removeClass("animate__fadeInRight");
            $(".back").css("transform", "rotate(0deg)").css("background-image",'url("Literature/back.png")');
            $(".hamburger").css("background-image",'url("Music/burger.png")');
            $(".column1").addClass("animate__fadeInLeft");
        } else {
            $(".column2").addClass("animate__fadeOutLeft");
            setTimeout(reverse_transition, 500);
            $(".back").css("transform", "rotate(180deg)").css("background-image", 'url("Literature/white_back.png")');
            $(".hamburger").css("background-image",'url("Music/white_burger.png")');
            setTimeout(crutch, 1000);
        }
    }


    // //Фикс левой фотки
    // $(window).scroll(function(event) {
    //     if ($(this).scrollTop () > $(window ).height() * 0.8) {
    //         $(".column1").css("background-attachment","fixed").css("background-position-x","-57.5%").css("background-position-y","72%");
    //         return false;
    //     }
    //     else {
    //         $(".column1").css("background-attachment","scroll").css("background-position-x","50%").css("background-position-y","0");
    //     }
    // });

    // Биография
    function ToggleBio() {
        $("#bio").slideToggle(800);
    }
    $(".author").bind("click", ToggleBio);
});