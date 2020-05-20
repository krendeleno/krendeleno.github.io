$(function () {
    //Плавный скролл
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;
    let c6 = 0;
    let c7 = 0;
    let c8 = 0;
    let c9 = 0;
    //Capturing the exact slider
    $(".next").click(function () {
        let n = $(this).attr("class").substring(1, 2);
        let size = $(".container_art_small").width();
        $("#content_art" + n).css("transition", "transform 0.3s ease-in-out");
        switch (n) {
            case "1":
                if (c1 < 2) {
                    c1++;
                    $("#content_art1").css("transform", `translateX(${-size * c1}px)`);
                    color(c1,n);
                }
                break;
            case "2":
                if (c2 < 2) {
                    c2++;
                    $("#content_art2").css("transform", `translateX(${-size * c2}px)`);
                    color(c2,n);
                }
                break;
            case "3":
                if (c3 < 3) {
                    $("#content_art3").css("transform", `translateX(${-size * c2}px)`);
                    c3++;
                }
                break;
            case "4":
                if (c4 < 3) {
                    $("#content_art4").css("transform", `translateX(${-size * c2}px)`);
                    c4++;
                }
                break;
            case "5":
                if (c5 < 3) {
                    $("#content_art5").css("transform", `translateX(${-size * c2}px)`);
                    c5++;
                }
                break;
            case "6":
                if (c6 < 3) {
                    $("#content_art6").css("transform", `translateX(${-size * c2}px)`);
                    c6++;
                }
                break;
            case "7":
                if (c7 < 3) {
                    $("#content_art7").css("transform", `translateX(${-size * c2}px)`);
                    c7++;
                }
                break;
            case "8":
                if (c8 < 3) {
                    $("#content_art8").css("transform", `translateX(${-size * c2}px)`);
                    c8++;
                }
                break;
            case "9":
                if (c9 < 3) {
                    $("#content_art9").css("transform", `translateX(${-size * c2}px)`);
                    c9++;
                }
                break;
            default:
                alert("this doesn't run");
        }
    });

    //State of buttons
    function color(slider, number) {
        if (slider === 0) {
            setTimeout(function () {
                $(".p" + number).css("stroke", "lightgrey");
            }, 300);
            $(".n" + number).css("stroke", "black");
        }
        else if (slider === 2) {
            setTimeout(function () {
                $(".n" + number).css("stroke", "lightgrey");
            }, 300);
            $(".p" + number).css("stroke", "black");
        } else {
            $(".p" + number).css("stroke", "black");
            $(".n" + number).css("stroke", "black");
        }
    }

    $(".prev").click(function () {
        let n = $(this).attr("class").substring(1, 2);
        let size = $(".container_art_small").width();
        $("#content_art" + n).css("transition", "transform 0.3s ease-in-out");
        switch (n) {
            case "1":
                if (c1 > 0) {
                    c1--;
                    $("#content_art1").css("transform", `translateX(${-size * c1}px)`);
                    color(c1,n);
                }
                break;
            case "2":
                if (c2 > 0) {
                    c2--;
                    $("#content_art2").css("transform", `translateX(${-size * c2}px)`);
                    color(c2,n);
                }
                break;
            case "3":
                if (c3 > 0) {
                    c3--;
                    $("#content_art3").css("transform", `translateX(${-size * c2}px)`);
                }
                break;
            case "4":
                if (c4 > 1) {
                    $("#content_art4").css("transform", `translateX(${-size * c2}px)`);
                    c4--;
                }
                break;
            case "5":
                if (c5 > 1) {
                    $("#content_art5").css("transform", `translateX(${-size * c2}px)`);
                    c5--;
                }
                break;
            case "6":
                if (c6 > 1) {
                    $("#content_art6").css("transform", `translateX(${-size * c2}px)`);
                    c6--;
                }
                break;
            case "7":
                if (c7 < 3) {
                    $("#content_art7").css("transform", `translateX(${-size * c2}px)`);
                    c7--;
                }
                break;
            case "8":
                if (c8 < 3) {
                    $("#content_art8").css("transform", `translateX(${-size * c2}px)`);
                    c8--;
                }
                break;
            case "9":
                if (c9 < 3) {
                    $("#content_art9").css("transform", `translateX(${-size * c2}px)`);
                    c9--;
                }
                break;
            default:
                alert("this doesn't run");
        }
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
