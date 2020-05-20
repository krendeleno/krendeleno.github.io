$(function () {

    function ToggleBio() {
        $("#bio").slideToggle(800);
    }

    $(document).ready(function () {
        $(".author").bind("click", ToggleBio);
    });
});