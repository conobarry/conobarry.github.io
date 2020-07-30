$(function () { // Only runs when the page is loaded.

    $("header").load("parts/header.html");
    $("nav").load("parts/nav.html");
    $("#image-modal").load("parts/image-modal.html");
    $("footer").load("parts/footer.html");    

    
    // Modal image viewer
    var imageModal = "#image-modal";
    var imageModalContent = "#image-modal #image-modal-content";
    var imageModalImg = "#image-modal #image-modal-img";
    var imageModalCaptionText = "#image-modal #image-modal-caption";
    var imageModalClose = "#image-modal #image-modal-close";

    $("img.modal").click(function () {
        $(imageModal).css("display", "block");
        $(imageModalImg).attr("src", $(this).attr("src"));
        $(imageModalImg).attr("alt", $(this).attr("alt"));
        $(imageModalCaptionText).html($(this).attr("alt"));
    });

    $(document).on("mouseenter", imageModalImg, function () {
        $(imageModalImg).addClass("mouseover");
    });
    
    $(document).on("mouseleave", imageModalImg, function () {
        $(imageModalImg).removeClass("mouseover");
    });
    
    $(imageModal).click(function () {
        if (! $(imageModalImg).hasClass("mouseover")) {
            $(imageModal).css("display", "none");
        }        
    });

    $(document).on("click", imageModalClose, function () {
        $(imageModal).css("display", "none");
    });    

    
    
    // Sticky nav
    var nav = $("nav");
    var hdr = $("header").height();
    $(window).scroll(function () {
        if ($(this).scrollTop() > hdr) {
            nav.addClass("sticky");
        } else {
            nav.removeClass("sticky");
        }
    });

    
    
    // Modal bug report
    var bugModal = "#bug-modal";
    var bugWrapper = "#bug-modal #bug-wrapper";
    var bugClose = "#bug-modal #bug-close";

    $(document).on("click", "a.report-bug", function () {
        $(bugModal).css("display", "block");
    });

    $(document).on("mouseenter", bugWrapper, function () {
        $(bugWrapper).addClass("mouseover");
    });
    
    $(document).on("mouseleave", bugWrapper, function () {
        $(bugWrapper).removeClass("mouseover");
    });
    
    $(bugModal).click(function () {
        if (! $(bugWrapper).hasClass("mouseover")) {
            $(bugModal).css("display", "none");
        }        
    });

    $(document).on("click", bugClose, function () {
        $(bugModal).css("display", "none");
    });    

    
    

    // Hamburger menu
    addHamburgerClass();

    $(window).resize(function () {
        addHamburgerClass();
    })

    function addHamburgerClass() {
        if ($(window).width() <= 550) {
            if (!nav.hasClass("hamburger")) {
                nav.addClass("hamburger");
            }
        } else {
            if (nav.hasClass("hamburger")) {
                nav.removeClass("hamburger");
            }
        }
    }
    
    // Closes the hamburger menu if the page is clicked.
    $("#main").click(closeHamburger);
    $("footer").click(closeHamburger);
    
    function closeHamburger() {
        if (nav.hasClass("hamburger") && $("nav input").is(":checked")) {
            $("nav input").prop("checked", false);
        }
    }



    // Copyright year -- For some reason this doesn't work so I put it inline
    var currentTime = new Date();
    $("#curr-year").html(new Date().getFullYear());

});
