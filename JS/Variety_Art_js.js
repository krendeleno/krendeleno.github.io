$(function () {

    //Слайдеры на телефоне
    function slider() {
        if ($(window ).width() <= 600) {
            $(".content_art").addClass("carousel").flickity({
                // options
                wrapAround: true
            });
            $(".container_art_small").addClass("carousel-cell");
        }
    }

    slider();
    $( window ).resize(function() {
        slider();
    });

    
    //Правое меню в мобильном дизайне
    $(".back").click(function () {
        $(".scroll").css("right","0");
        $(".modalw").css("display", "flex");
    });

    function closing() {
        $(".scroll").css("right","-999px");
        $(".modalw").css("display", "none");
    }
    $(".close").bind("click", closing);
    $(".scroll a").bind("click", function () {
       setTimeout(closing, 300);
    });

    //Плавный скролл
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
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

    //Мне нужно хранить состояние каждого слайдера, поэтому так много повторяющегося кода, но я сокращала как могла
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;
    let c6 = 0;
    let c7 = 0;
    let c8 = 0;
    let c9 = 0;
    let c10 = 0;
    //Capturing the exact slider
    $(".nxt").click(function () {
        let n = $(this).closest(".direction").attr("id");
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
                if (c3 < 2) {
                    c3++;
                    $("#content_art3").css("transform", `translateX(${-size * c3}px)`);
                    color(c3,n);
                }
                break;
            case "4":
                if (c4 < 2) {
                    c4++;
                    $("#content_art4").css("transform", `translateX(${-size * c4}px)`);
                    color(c4,n);
                }
                break;
            case "5":
                if (c5 < 2) {
                    c5++;
                    $("#content_art5").css("transform", `translateX(${-size * c5}px)`);
                    color(c5,n);
                }
                break;
            case "6":
                if (c6 < 2) {
                    c6++;
                    $("#content_art6").css("transform", `translateX(${-size * c6}px)`);
                    color(c6,n);
                }
                break;
            case "7":
                if (c7 < 2) {
                    c7++;
                    $("#content_art7").css("transform", `translateX(${-size * c7}px)`);
                    color(c7,n);
                }
                break;
            case "8":
                if (c8 < 2) {
                    c8++;
                    $("#content_art8").css("transform", `translateX(${-size * c8}px)`);
                    color(c8,n);
                }
                break;
            case "9":
                if (c9 < 2) {
                    c9++;
                    $("#content_art9").css("transform", `translateX(${-size * c9}px)`);
                    color(c9,n);
                }
                break;
            case "10":
                if (c10 < 2) {
                    c10++;
                    $("#content_art10").css("transform", `translateX(${-size * c10}px)`);
                    color(c10,n);
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
        let n = $(this).closest(".direction").attr("id");
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
                    $("#content_art3").css("transform", `translateX(${-size * c3}px)`);
                    color(c3,n);
                }
                break;
            case "4":
                if (c4 > 0) {
                    c4--;
                    $("#content_art4").css("transform", `translateX(${-size * c4}px)`);
                    color(c4,n);
                }
                break;
            case "5":
                if (c5 > 0) {
                    c5--;
                    $("#content_art5").css("transform", `translateX(${-size * c5}px)`);
                    color(c5,n);
                }
                break;
            case "6":
                if (c6 > 0) {
                    c6--;
                    $("#content_art6").css("transform", `translateX(${-size * c6}px)`);
                    color(c6,n);
                }
                break;
            case "7":
                if (c7 > 0) {
                    c7--;
                    $("#content_art7").css("transform", `translateX(${-size * c7}px)`);
                    color(c7,n);
                }
                break;
            case "8":
                if (c8 > 0) {
                    c8--;
                    $("#content_art8").css("transform", `translateX(${-size * c8}px)`);
                    color(c8,n);
                }
                break;
            case "9":
                if (c9 > 0) {
                    c9--;
                    $("#content_art9").css("transform", `translateX(${-size * c9}px)`);
                    color(c9,n);
                }
                break;
            case "10":
                if (c10 > 0) {
                    c10--;
                    $("#content_art10").css("transform", `translateX(${-size * c10}px)`);
                    color(c10,n);
                }
                break;
            default:
                alert("this doesn't run");
        }
    });

});
