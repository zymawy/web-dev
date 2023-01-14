/**
 * It takes two arguments, the first one is the id of the search button and the second one is the id of the input field,
 * then it adds an event listener to the search button and when the button is clicked it gets the value of the input field
 * and checks if the value is empty or not, if it's empty it alerts the user to type a keyword, if it's not empty it checks
 * if the keyword is less than 3 characters, if it's less than 3 characters it alerts the user to type at least 3
 * characters, if it's more than 3 characters it redirects the user to the search page with the keyword as a query string
 * @param [inputId=search] - The id of the input field
 * @param [inputText=searchKeyword] - The id of the input field
 */
function doSearch(inputId = 'search', inputText = 'searchKeyword') {
    let searchButton = document.getElementById(inputId), searchKeyword = document.getElementById(inputText);
    const checkValidation = () => {
        // let's get the value of the input of the search
        let value = searchKeyword.value;
        // let's check if the value has some value if not let's notify our customer !
        if (!value) {
            alert('Please Type Keyword To Search!');
            return false;
        }
        // let's get going and count our string
        // for quick check we are splitting the string into
        // an array and count the total array…
        let keywordCount = value.split('').length;
        if (keywordCount < 3) {
            alert('The Mini of 3 chars needed !');
            return false;
        }

        window.location.href = '/search.html?search=' + value;
    }

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        checkValidation();
    })
    searchKeyword.addEventListener('keypress', (e) => {
        if (e.key !== 'Enter') return e;
        checkValidation();
    })
}

/* It's fetching the data from the json file and then it's doing something with it. */
fetch('data/articles.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(response => {
        // let's get going and notify our main class :)
        const DataNewsEventLoaded = new CustomEvent('news-data-loaded', {
            bubbles: true, detail: {
                data: () => response
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
    /* It's adding an event listener to the `#main-nav ul li` element and when the element is clicked it checks if the
    element has a child element with the tag name `ul` and if it has it toggles the child element with the tag name `ul`
    and it toggles the class `active-nav` on the child element with the tag name `a` */
    $('#main-nav ul li').click(function () {
        if ($(this).children("ul").length) {
            $(this).children("ul").toggle(500);
            $(this).children("a").toggleClass('active-nav');
        }
    })

    /* It's adding an event listener to the element with the id `view-poll-results` and when the element is clicked it
    toggles the element with the class `poll-results` and it toggles the parent element of the element with the id
    `view-poll-results` */
    $("#view-poll-results").click(function () {
        $(this).parent().parent().find(".poll-results").toggle(500);
        $(this).parent().toggle(100);
    })

    /* It's adding an event listener to the element with the id `back-to-vote` and when the element is clicked it
    toggles the element with the class `poll-options` and it toggles the parent element of the element with the id
    `back-to-vote` */
    $("#back-to-vote").click(function () {
        $(this).parent().parent().find(".poll-options").toggle(500);
        $(this).parent().toggle(100);
    })
});
// lets init our search inputs
doSearch();
doSearch('searchMobile', 'searchKeywordMobile');
