$(function () {

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

    // Биография
    function ToggleBio() {
        $("#bio").slideToggle(800);
    }

    $(document).ready(function () {
        $(".author").bind("click", ToggleBio);
    });
});