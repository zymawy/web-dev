fetch('/data/Post.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(response => {
        // let's get going and notify our main class :)
        const DataNewsEventLoaded = new CustomEvent('news-data-loaded', {
            bubbles: true,
            detail: {
                data: () =>
                    response
                        // taken from https://stackoverflow.com/a/46545530/6531160 to shuffle our news randomly
                        .map(value => ({ value, sort: Math.random() }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(({ value }) => value)
            }
        });

        // let's dispatch it !
        document.dispatchEvent(DataNewsEventLoaded)
    })
    .catch(err => {
        console.log(err)
    })

// JavaScript Document
$(function () {
    $('#main-nav ul li').click(function () {
        if ($(this).children("ul").length) {
            $(this).children("ul").toggle(500);
            $(this).children("a").toggleClass('active-nav');
        }
    })

    $("#view-poll-results").click(function () {
        $(this).parent().parent().find(".poll-results").toggle(500);
        $(this).parent().toggle(100);
    })

    $("#back-to-vote").click(function () {
        $(this).parent().parent().find(".poll-options").toggle(500);
        $(this).parent().toggle(100);
    })

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) { event.preventDefault(); $(this).ekkoLightbox(); });
});