$(window).scroll(function() {
    console.log($(".navbar").offset().top);
    if ($(".navbar").offset().top == 0) {
        $("#scrollSpy").removeClass("when-scroll");
    } else {
        $("#scrollSpy").addClass("when-scroll");
    }
});

$(document).ready(function(){

    $("#scrollSpy").scrollspy();

    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $("#owl-demo").owlCarousel({

        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true,
        autoHeight: true

    });
});