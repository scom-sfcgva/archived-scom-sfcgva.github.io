$(document).ready(function () {
    const projects = {
        willPizzeria: {
            title: "Will's Pizzeria",
            language: "React & Node on Express",
            detail: "Will's Pizzeria is a personal app that lets you order a pizza. Please note the app is only for personal project use not for commercial use. The application is built in React, Node, and MongoDB.",
            link: "https://willspizzeria.herokuapp.com/",
            photo: "./media/pizza.jpg",
            imageSlides: ["./media/pizza/menu.jpg", "./media/pizza/orders.jpg", "./media/pizza/checkout.jpg"]
        },
        idl: {
            title: "Instituto de Defensa Legal",
            language: "React & (PHP) Wordpress",
            detail: "Instituto de Defensa Legal (English: Institute of Legal Defense) is an institution of civil society founded in 1983, which aims to promote and defend human rights, democracy and peace in Peru and Latin America. The application is built in React and Wordpress.",
            link: "https://idl.org.pe/",
            photo: "./media/idlperu.jpg",
            imageSlides: ["./media/idl/areas.jpg", "./media/idl/noticas.jpg", "./media/idl/videoclip.jpg"]
        },
        ufvManager: {
            title: "UFV Appointment Manager",
            language: "Angular & PHP Laravel",
            detail: "UFV Appointment Manager is an online appointment system by University of the Fraser Valley. Students use it to book appointments with Academic and Career Advisors and Faculty Staff. The application is built in Angular, PHP Laravel, and MySQL.",
            link: "https://am.ufv.ca/amonline/",
            photo: "./media/ufv.jpg",
            imageSlides: ["./media/ufv/advisor.jpg", "./media/ufv/login.jpg", "./media/ufv/qualify.jpg"]
        },
        bcitProject: {
            title: "Advanced Web Design Final Project",
            language: "CSS with Sass, HTML5, & Javascript",
            detail: "This final project was a proposal for the new page layout of COMP 1950's course page of the British Columbia Institute of Technology.",
            link: "https://comp1950final.netlify.app/",
            photo: "./media/bcit/bcit.jpg",
            imageSlides: ["./media/bcit/bcit.jpg", "./media/bcit/bcit2.jpg", "./media/bcit/bcit3.jpg", "./media/bcit/bcit4.jpg"]
        },
        relentless: {
            title: "Relentless Conference",
            language: "React, Redux, and Node on Express",
            detail: "Relentless is a landing website which includes a registration and payment system for the conference entitled Relentless organized by Singles For Christ. The application is built in React, PHP Laravel, and MySQL.",
            link: "https://relentless-sfcgva.herokuapp.com/",
            photo: "./media/sfc.jpg",
            imageSlides: ["./media/sfc.jpg", "./media/relentless/reg1.jpg", "./media/relentless/posts.jpg", "./media/relentless/about.jpg"]
        },
        titan22: {
            title: "Titan 22",
            language: "jQuery & Magento PHP",
            detail: "Titan 22 is the leading e-commerce website in the Philippines when it comes to basketball-oriented products from a wide selection of brands like Nike, Jordan, Adidas,  Under Armour, and more. The e-commerce website is built in jQuery, PHP Magento, and MySQL.",
            link: "https://www.titan22.com/",
            photo: "./media/titan22.jpg",
            imageSlides: ["./media/titan22/home.jpg", "./media/titan22/products.jpg", "./media/titan22/products2.jpg", "./media/titan22/blog.jpg"]
        },
        devHub: {
            title: "Developers Hub",
            language: "React, Redux, & Node on Express",
            detail: "Developers Hub is a social media platform for developers. Users can write posts, visit profiles, and create an account. The application is built in React, Redux, Node, and MongoDB.",
            link: "https://developershub.herokuapp.com/",
            photo: "./media/developers.jpg",
            imageSlides: ["./media/devhub/home.jpg", "./media/devhub/profile.jpg", "./media/devhub/profiles.jpg"]
        },
        bigOrange: {
            title: "Big Orange Food Express",
            language: "Angular & Node on Express",
            detail: "Big Orange lets users order food from a wide selection of restaurants in Los Angeles, CA. This app is not intended for commercial use but rather educational. The application is built in Angular, Node on Express, and MySQL.",
            link: "http://bigorange.herokuapp.com/",
            photo: "./media/big_orange.jpg",
            imageSlides: ["./media/bigorange/login.jpg", "./media/bigorange/register.jpg"]
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

    $('#portfolio .button').on('click', function () {
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