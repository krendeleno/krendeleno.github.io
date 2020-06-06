$(function () {
    function clearing(){
        $("#" + n).css("display", "none");
        $("#" + n + " .modal_window").removeClass("animate__zoomOut");
        $("#" + n).removeClass("animate__fadeOut");
    }
// Modal windows
    $(".box").click(function () {
        n = $(this).attr("class").substring(12);
        const modal = document.getElementById(n);
        $("#" + n).addClass("animate__fadeIn");
        $("#" + n + " .modal_window").addClass("animate__zoomIn");
        $("#" + n).css("display", "flex");
        $(".close").click(function () {
            $("#" + n + " .modal_window").addClass("animate__zoomOut").removeClass("animate__zoomIn");
            $("#" + n).removeClass("animate__fadeIn").addClass("animate__fadeOut");
            setTimeout(clearing, 300);
        });
        window.onclick = function (event) {
            if (event.target === modal) {
                $("#" + n + " .modal_window").addClass("animate__zoomOut").removeClass("animate__zoomIn");
                $("#" + n).removeClass("animate__fadeIn").addClass("animate__fadeOut");
                setTimeout(clearing, 300);
            }
        };
    });
});