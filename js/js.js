// a gloable fucntion to help us, perform a search by just give the input id, input text
function doSearch(inputId = 'search', inputText = 'searchKeyword') {
    let searchButton = document.getElementById(inputId),
        searchKeyword = document.getElementById(inputText);

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        // let's get the value of the input of the search
        let kayword = searchKeyword.value;
        // let's check if the kayword has some value if not le'ts notify our customer !
        if (!kayword) {
            alert('Please Type Keyword To Search!');
            return;
        }
        // let's get going and count our string
        // for quick check we are splting the string into
        // an array and count the total array..
        let keywordCount = kayword.split('').length;
        if (keywordCount < 3) {
            alert('The Mini of 3 chars needed !');
            return;
        }

        window.location.href = '/search.html?search=' + kayword;
    })
}
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

doSearch();
doSearch('searchMobile', 'searchKeywordMobile');