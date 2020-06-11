$(function () {

    // Выпадающее верхнее меню
    $(window).scroll(function(event) {
        if ($(this).scrollTop () > $(window ).height() * 0.3 && $(window ).width() > 600) {
            $(".scroll_menu").slideDown();
            return false;
        }
        else {
            $(".scroll_menu").slideUp();
        }
    });

    function close() {
        $("#" + n + " .modal-content").addClass("animate__zoomOut").removeClass("animate__zoomIn").removeClass("animate__fadeIn");
        $("#" + n).removeClass("animate__fadeIn").addClass("animate__fadeOut");
        setTimeout(clearing, 300);
    }

    function newModal(flag) {
        $("#" + n + " .modal-content").removeClass("animate__fadeIn").removeClass("animate__zoomIn");
        $("#" + n).removeClass("animate__fadeIn").css("display", "none");
        $("#" + n + " .modal-content").removeClass("animate__zoomOut");
        if (flag == -1) {
            n--;
        } else {
            n++;
        }
        $("#" + n + " .modal-content").addClass("animate__fadeIn");
        $("#" + n).css("display", "flex");
    }

    function clearing() {
        $("#" + n).css("display", "none");
        $("#" + n + " .modal-content").removeClass("animate__zoomOut");
        $("#" + n).removeClass("animate__fadeOut");
    }

    $(".prev").click(function () {
        if (n == 1)
            return;
        newModal(-1);
    });

    $(".next").click(function () {
        if ($("#art" + n).hasClass("last"))
            return;
        newModal(1);

    });
// Modal windows
    $(".box").click(function () {
        n = $(this).attr("id").substring(3);
        $("#" + n).addClass("animate__fadeIn");
        $("#" + n + " .modal-content").addClass("animate__zoomIn");
        $("#" + n).css("display", "flex");

        $(".close").click(function () {
            close();
        });

        window.onclick = function (event) {
            const modal = document.getElementById(n);
            if (event.target === modal) {
                close();
            }
        };
    });


    //Animation
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
});