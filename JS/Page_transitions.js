$(function() {
    //hamburger
    $(".hamburger").click(function () {
        $(".container").css("left", "0");
        $(".modalw").css("display", "flex");
    });

    $(".closew").click(function () {
        $(".container").css("left", "-999px");
        $(".modalw").css("display", "none");
    });

    //Page transitions
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) {
            window.location.href = url;
        }
    });

    //up
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $(".up").fadeIn();
        } else {
            $(".up").fadeOut();
        }
    });
    $(".up").click(function () {
        $('body,html').animate({scrollTop: 0}, 700); });

    //Плавный скролл
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
