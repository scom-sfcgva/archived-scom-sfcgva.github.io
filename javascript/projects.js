$(document).ready(function () {
    $("#all").on("click", function () {
        $(".node").removeClass("removed");
        $(".php").removeClass("removed");
        $(".html").removeClass("removed");
    });


    $("#node").on("click", function () {
        $(".node").addClass("showup");

        $(".php").addClass("collapse");
        $(".html").addClass("collapse");

        setTimeout(function () {
            $(".php").addClass("removed");
            $(".php").removeClass("showup");

            $(".html").addClass("removed");
            $(".html").removeClass("showup");
        }, 200);
    });


    $("#php").on("click", function () {
        $(".php").addClass("showup");

        $(".node").addClass("collapse");
        $(".html").addClass("collapse");

        setTimeout(function () {
            $(".node").addClass("removed");
            $(".node").removeClass("showup");

            $(".html").addClass("removed");
            $(".html").removeClass("showup");
        }, 200);
    });
});