$(function () {

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
        if ($(this).scrollTop () > $(window ).height() * 0.1) {
            $(".scroll_menu").slideDown();
            return false;
        }
        else {
            $(".scroll_menu").slideUp();
        }
    });

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