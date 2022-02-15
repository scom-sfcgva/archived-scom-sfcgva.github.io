$(document).ready(function () {

    $("#hamburger").on("click", function () {
        var links = $("#links");

        if (links.css("display") === "block") {
            links.css("display", "none");
            console.log("display", "none");
        } else {
            links.css("display", "block");
            console.log("display", "block");
        }
    });


    $(window).mousewheel(function () {
        adjustLinks();
    });

    $(window).scroll(function () {
        adjustLinks();
    });


    function adjustLinks() {
        var scrollPos = $(document).scrollTop() + 120;
        var homePos = $("#home").position().top;
        var aboutPos = $("#about").position().top;
        var profilePos = $("#portfolio").position().top;
        var contactPos = $("#contact").position().top;

        if (scrollPos >= homePos && scrollPos < aboutPos) {
            $("#menu-links li").removeClass("active");
            $("#homeLink").addClass("active");
        }
        if (scrollPos >= aboutPos && scrollPos < profilePos) {
            $("#menu-links li").removeClass("active");
            $("#aboutLink").addClass("active");
        }
        if (scrollPos >= profilePos && scrollPos < contactPos) {
            $("#menu-links li").removeClass("active");
            $("#profileLink").addClass("active");
        }
        if (scrollPos >= contactPos) {
            $("#menu-links li").removeClass("active");
            $("#contactLink").addClass("active");
        }
    }


    $("#menu-links li").on("click", function () {
        // De-activate the other links
        $("#menu-links li").removeClass("active");

        // Make the selected link active
        $(this).addClass("active");
    });
});
