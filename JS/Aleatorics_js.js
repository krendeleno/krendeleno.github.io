$(function() {

//Попытки сделать плеер
    Amplitude.init({
        "songs": [
            {
                "name": "Studie No.1",
                "artist": "Карлхайнц Штокхаузен",
                "album": "Album Name",
                "url": "Music/Studie No. 1.mp3"
            },
            {
                "name": "Studie No.2",
                "artist": "Карлхайнц Штокхаузен",
                "album": "Album Name",
                "url": "Music/Studie No. 2.mp3"
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