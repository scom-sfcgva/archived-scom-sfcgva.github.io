$(document).ready(function () {
    const projects = {
        multimedia: {
            title: "Multimedia",
            detail: "Design and create graphics. Make and edit videos.",
            photo: "./media/scom/media2.jpeg",
            imageSlides: ["./media/scom/multimedia.jpeg", "./media/scom/media2.jpeg", "./media/scom/media3.jpeg"]
        },
        socialMedia: {
            title: "Social Media & Communications",
            detail: "Make and share posts and stories. Promote events.",
            photo: "./media/scom/socmed2.jpeg",
            imageSlides: ["./media/scom/social-media.jpeg", "./media/scom/socmed3.jpeg", "./media/scom/socmed2.jpeg"]
        },
        events: {
            title: "Events",
            detail: "Events.",
            photo: "./media/scom/events2.jpeg",
            imageSlides: ["./media/scom/events.jpeg", "./media/scom/events2.jpeg"]
        },
        docuArchives: {
            title: "Documentation & Archives",
            detail: "Manage storage.",
            photo: "./media/scom/docu.jpeg",
            imageSlides: ["./media/scom/docu2.jpeg", "./media/scom/docu.jpeg"]
        },
        nodeMessenger: {
            title: "Node Messenger",
            language: "ES6, Socket.io, & Node",
            detail: "Node Messenger is a chat application that lets users chat in real time. The app is integrated with Socket.io. The application is built in Javascript ES6, Node on Express, and Socket.io",
            link: "https://nodesocketmessenger.herokuapp.com/",
            photo: "./media/node_socket.jpg",
            imageSlides: ["./media/chat/chat.jpg", "./media/chat/home.jpg"]
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
        if (projects[id].link) {
            $('#modal .button')
                .parent()
                .attr('href', projects[id].link);
        }

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


    // Portfolio layout in mobile view
    for (project in projects) {
        $('#project-list').append('<li class=list-button><a href=' + projects[project].link + ' target=_blank>' + projects[project].title + '</a></li>');
    }
});