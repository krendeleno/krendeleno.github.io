$(function() {

//Попытки сделать плеер
    Amplitude.init({
        "songs": [
            {
                "name": "Studie No.1",
                "artist": "Карлхайнц Штокхаузен",
                "album": "Album Name",
                "url": "https://psv4.vkuseraudio.net/c4526/u632200/audios/f0525ce63c42.mp3?extra=Z0NrPRBEVUEvFC29NiwvhF9HOXMx6MO0xfe0Qua1ooP0LG7GhyL04T8d8KnNoIeWkv7Aney30gq-QTlfk7Nzm2Oji5SkX5UgPICpxjtZ8jq6OCXJY7BmH5BS03YdXSz_FcMNsQy0KK--eAzSu9Hixinqjg"
            },
            {
                "name": "Studie No.2",
                "artist": "Карлхайнц Штокхаузен",
                "album": "Album Name",
                "url": "https://psv4.vkuseraudio.net/c4526/u632200/audios/3e083261b68e.mp3?extra=yVYIDewpi1JqzaQEhcP7X3BzGYC9Jk6dZuR9O1g61feI_CEAqxlp0WGUThtudiVVD8eHlzQ7r9EzY8rgyBzgOM1ooEncQmiAbLKEtf-7TP_orlSdX17A_1pMlyedXwpmpZpBVmn28rL3eriZdysrbFQ"
            }
        ]
    });

    //Mute icon
    $(".amplitude-mute").bind('click', function() {
        if ($(".amplitude-mute").hasClass("amplitude-muted")) {
            $(".mute-icon").css('background-image', 'url("Music/icons/not_mute.png")');
        } else {
            $(".mute-icon").css('background-image', 'url("Music/icons/mute.png")');
        }
    });

    //Play-pause icon
    $(".amplitude-play-pause, .amplitude-prev, .amplitude-next").bind('click', function() {
        n = Amplitude.getActiveIndex();
        if ($(".amplitude-play-pause").hasClass("amplitude-playing")) {
            //Ставятся на play все иконки, кроме текущей песни
            $(".pause-icon").css('background-image', 'url("Music/icons/play.png")');
            //Ставится на pause иконка текущей песни и плеера
            $(".controls .pause-icon").css('background-image', 'url("Music/icons/pause.png")');
            $("#" + n + " .pause-icon").css('background-image', 'url("Music/icons/pause.png")');
        } else {
            $(".controls .pause-icon").css('background-image', 'url("Music/icons/play.png")');
            $("#" + n + " .pause-icon").css('background-image', 'url("Music/icons/play.png")');
        }
    });
    //Ставятся на play все иконки
    $(".stop-icon").bind('click', function () {
        $(".pause-icon").css('background-image', 'url("Music/icons/play.png")');
    });

    //Download
    $(".amplitude-play-pause, .amplitude-prev, .amplitude-next").bind('click', function(){
        n = Amplitude.getActiveSongMetadata();
        path = n["url"];
        $(".control a").attr("href", path);
    });

    //Volume
    $(".volume-icon").click (
    function () {
        $('.volume-wrapper').slideToggle(100);
    });

});