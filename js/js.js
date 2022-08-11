// JavaScript Document
$(function(){
$('#main-nav ul li').click(function(){
    if($(this).children("ul").length){
        $(this).children("ul").toggle(500);
        $(this).children("a").toggleClass('active-nav');
    }
})

    $("#projects-items").owlCarousel({
        items: 4,
        lazyLoad: true,
        autoPlay: true
    });

    $("#view-poll-results").click(function(){
        $(this).parent().parent().find(".poll-results").toggle(500);
        $(this).parent().toggle(100);
    })

    $("#back-to-vote").click(function(){
        $(this).parent().parent().find(".poll-options").toggle(500);
        $(this).parent().toggle(100);
    })

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) { event.preventDefault(); $(this).ekkoLightbox(); });

    $("#partners-items").owlCarousel({
        items: 4,
        lazyLoad: true,
        autoPlay: true
    });

    $("#lt-news").owlCarousel({
        singleItem: true,
        lazyLoad: true,
        autoPlay: true
    });

    $("#projects-page-holder").owlCarousel({
        singleItem: true,
        lazyLoad: true,
        autoPlay: true
    });
});