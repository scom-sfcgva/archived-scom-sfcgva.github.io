$(document).ready(function () {
    const projects = {
        multimedia: {
            title: "Multimedia",
            detail: "Design and create graphics. Create videos.",
            photo: "./media/scom/media2.jpeg",
            imageSlides: ["./media/scom/multimedia.jpeg", "./media/scom/media2.jpeg", "./media/scom/media3.jpeg"]
        },
        socialMedia: {
            title: "Social Media Communications",
            detail: "Make and share posts and stories.",
            photo: "./media/scom/socmed2.jpeg",
            imageSlides: ["./media/scom/social-media.jpeg", "./media/scom/socmed3.jpeg", "./media/scom/socmed2.jpeg"]
        },
        events: {
            title: "Events",
            detail: "Promote upcoming events.",
            photo: "./media/scom/events2.jpeg",
            imageSlides: ["./media/scom/events.jpeg", "./media/scom/events2.jpeg"]
        },
        docuArchives: {
            title: "Archives",
            detail: "Manage documentation of events.",
            photo: "./media/scom/docu.jpeg",
            imageSlides: ["./media/scom/docu2.jpeg", "./media/scom/docu.jpeg"]
        }
    };

    $('#teams .button').on('click', function () {
        fillModal(this.id);
        $('.modal-container').addClass('visible');
    });

    $('.close').on('click', function () {
        $('.modal-container').removeClass('visible');
    });

    $('.mask').on('click', function () {
        $('.modal-container').removeClass('visible');
    });

    $('#left').on('click', function () {
        changeBackground(-1);
    });

    $('#right').on('click', function () {
        changeBackground(1);
    });

    var modal;
    var selectedIndex = 0;

    function fillModal(id) {
        modal = projects[id];

        $('#modal .title').text(projects[id].title);
        $('#modal .info').text(projects[id].detail);

        $('#modal .carousel').css('background-image', 'url(' + projects[id].imageSlides[0] + ')');
        $('#modal .carousel').addClass('visible');
    }

    function changeBackground(n) {
        var images = modal.imageSlides;

        selectedIndex += n;

        if (selectedIndex > images.length - 1) {
            selectedIndex = 0;
        }

        if (selectedIndex < 0) {
            selectedIndex = images.length - 1;
        }

        $('#modal .carousel').css('background-image', 'url(' + modal.imageSlides[selectedIndex] + ')');
    }
});