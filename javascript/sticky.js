$(document).ready(function () {
    window.onscroll = function () { applySticky() };

    var navMenu = document.getElementById("nav-menu");
    var sticky = navMenu.offsetTop;

    function applySticky() {
        if (window.pageYOffset >= sticky) {
            navMenu.classList.add("sticky")
        } else {
            navMenu.classList.remove("sticky");
        }
    }

    // $(window).scroll(function () {
    //     var navPosition = $("#nav-menu").offset().top;
    //     var scrollPos = $(window).scrollTop();

    //     if (scrollPos >= navPosition) {
    //         $("#nav-menu").addClass("sticky");
    //     }
    //     if (scrollPos < navPosition) {
    //         $("#nav-menu").removeClass("sticky");
    //     }
    // });
});