function image(thumb, large) {
    this.thumb = thumb;
    this.large = large;
}

function boundedInt(min, max) {
    this.min = min;
    this.max = max;
    var __value = 0;
    this.value = function (val) {
        if (typeof (val) === 'undefined') {
            return __value;
        } else {
            if (val > max) {
                __value = max;
            } else if (val < min) {
                __value = min;
            } else {
                __value = val;
            }
        }
    }
}

function setImage(img) {
    console.log("img src: " + $(img).attr("src") + ", alt: " + $(img).attr("alt"));
    $("#gallery-img img").attr("src", $(img).attr("src"));
    $("#gallery-img img").attr("alt", $(img).attr("alt"));
    $("#gallery-caption").html($(img).attr("alt"));
}

$(function () { // Only runs when the page is loaded.

    // Modal gallery
    var galleryModal = "#gallery-modal";
    var galleryContent = "#gallery-modal #gallery-content";
    var galleryImg = "#gallery-modal img";
    var galleryCaption = "#gallery-modal #gallery-caption";
    var galleryClose = "#gallery-modal #gallery-close";
    var galleryNext = "#gallery-modal #gallery-next";
    var galleryPrev = "#gallery-modal #gallery-prev";
        
    var images = [];
    
    $(".gallery").find("img").each(function () {
        var src = $(this).attr("src");
        var caption = $(this).attr("alt");
        images.push($(this));
    });
    
    var index = new boundedInt(0, images.length - 1);        

    $(".gallery img").click(function () {
        console.log("image clicked");
        $(galleryModal).css("display", "block");
        $(galleryImg).attr("src", $(this).attr("src"));
        $(galleryImg).attr("alt", $(this).attr("alt"));
        $(galleryCaption).html($(this).attr("alt"));
    });

    $(document).on("mouseenter", galleryImg, function () {
        $(galleryImg).addClass("mouseover");
    });

    $(document).on("mouseleave", galleryImg, function () {
        $(galleryImg).removeClass("mouseover");
    });

    $(document).on("click", galleryClose, function () {
        console.log("close click");
        $(galleryModal).css("display", "none");
    });    


    $(galleryNext).click(function () {        
        console.log("next clicked");
        console.log("Index: " + index.value());
        index.value(index.value() + 1);
        setImage(images[index.value()]);
    })

    $(galleryPrev).click(function () {
        console.log("prev clicked");
        console.log("Index: " + index.value());
        index.value(index.value() - 1);
        setImage(images[index.value()]);
    })


});
