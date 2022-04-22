$(document).ready(function () {
    const projects = {
        multimedia: {
            title: "Multimedia",
            detail: "The Multimedia sub-committee handles the creation of graphics and videos for promoting ministry events.",
            photo: "./media/scom/media2.jpeg",
            imageSlides: ["./media/scom/multimedia.jpeg", "./media/scom/media2.jpeg", "./media/scom/media3.jpeg"]
        },
        socialMedia: {
            title: "Communications",
            detail: "The Communications sub-committee consists of two components. Internal Communications is charge of the internal communications and is responsible for blasting communication and receiving feedback, while the External Communication includes the social media team, website team, marketing and promotions, research and development.",
            photo: "./media/scom/socmed2.jpeg",
            imageSlides: ["./media/scom/social-media.jpeg", "./media/scom/socmed3.jpeg", "./media/scom/socmed2.jpeg"]
        },
        events: {
            title: "Events",
            detail: "The Events sub-committee primariliy acts as event coordinator of the ministry during events. The role also includes moderating events and keeping track of attendance.",
            photo: "./media/scom/events2.jpeg",
            imageSlides: ["./media/scom/events.jpeg", "./media/scom/events2.jpeg"]
        },
        docuArchives: {
            title: "Documentation",
            detail: "The Documentation sub-committee roles includes capturing moments during ministry events in the forms of photos and videos. It also includes recording testimonies of the faith journey of members in the SFC community.",
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