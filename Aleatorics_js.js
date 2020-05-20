$(function() {
    //Кнопка "слушать"
    $(".button").click(function () {
        $("#track1")[0].play();
    });

    //Progress
    var audio = document.getElementsByTagName('audio')[0];
    var progressBar = document.getElementsByTagName('progress')[0];
    if(audio && progressBar) {
        progressBar.addEventListener('click', function (event) {
            let widthLeft = $(seekBar).offset().left;
            let x = event.pageX - widthLeft;
            let xPersent = x / this.offsetWidth * 100;
            song.currentTime = song.duration * (xPersent / 100);
        });
    }


//Включение следующего аудио после завершения предыдущего
    $("audio").on('ended', function () {
        n = $(this).attr("id").substring(5);
        if (n == $('audio').length)
            return;
        n++;
        $("#track" + n)[0].play();
    });

    //Запрет на воспроизведение 2х и более аудио одновременно
    const audios = Array.from(document.querySelectorAll('audio'));
    let playing = true;

    audios.forEach(audio => {
        audio.addEventListener('play', function() {
            if (playing) {
                audios.forEach(el => {
                    el.pause();
                });
            }
            if (this.paused) {
                playing = false;
                this.play();
            } else {
                playing = true;
            }
        });
    });

});