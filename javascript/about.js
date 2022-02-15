$(document).ready(function () {
    function slideIn() {
        var scrollPos = $(document).scrollTop();
        var aboutPos = $("#about").position().top + ($("#about").position().top / 11);

        if (scrollPos >= aboutPos) {
            $(".content-grid-3 .skills").addClass("fade-right");
            $(".content-grid-4 .tech-stack").addClass("fade-left");
        }
    }

    $(window).mousewheel(function () {
        slideIn();
    });

    $(window).scroll(function () {
        slideIn();
    });


    // Prevent default form submit behaviour and show response
    $('#submit-button').on('click', function (event) {
        // Inputs must not be empty
        if ($('#name').val() !== '' && $('#email').val() !== '' && $('textarea').val() !== '') {
            event.preventDefault();
            $('#contact-form').trigger('reset');
            $('#response').removeClass('collapse');
            $('#response').addClass('visible');
        }
    });

    $('#close').on('click', function () {
        $('#response').removeClass('visible');
        $('#response').addClass('collapse');
    });

});