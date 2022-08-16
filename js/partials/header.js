/**
 * The Header Partial
 */
Handlebars.registerPartial('header',
    `<header class="container-fluid" id="main-header">
                <div id="header-top">
                    <div class="container" id="top-header-cont">
                        <ul id="nav-trigger-name">
                            <li id="st-trigger-effects" class="nav-trigger">
                                <button data-effect="st-effect-3" id="nav-tr"></button>
                            </li>
                            <li id="news-name">
                                <a href='/'> <h1 id="news-head-name">{{ title }}</h1></a>
                                <h2 id="news-head-slogan">{{ subTitle }}</h2>
                            </li>
                        </ul>
                        <ul class="row f-right" id="social-links">
                            {{#each socialLinks}}
                                <li><a href="#"><img src="{{ this.icon }}" alt="{{ this.name }}"> </a> </li>
                            {{/each}}
                            <br class="clear"><br>
                            <div class="input-group">
                                <input type="text" id='searchKeyword' class="form-control" placeholder="Search...">
                                <span class="input-group-btn"><button id='search' class="btn btn-default" type="button">Search
                                </button></span>
                            </div>
                        </ul>
                    </div>
                </div>
            </header>
                <br>`
);

/**
 Compile the template
*/
const containerHeader = $('#container-header'),
    headerTemplate = $('#header-template');
const headerTemplateCompiled = Handlebars.compile(
    headerTemplate.html()
);
// OPTIONAL: Define data to pass to the template
const headerData = {
    title: "Coder News ",
    subTitle: "For Developers From Developers",
    socialLinks: [
        { icon: 'assets/images/ics/fb.png', name: "Facebook" },
        { icon: 'assets/images/ics/tw.png', name: "Twitter" },
        { icon: 'assets/images/ics/yt.png', name: "Youtube" },
        { icon: 'assets/images/ics/in.png', name: "Instagram" },
    ]
}
containerHeader.empty().append(headerTemplateCompiled(headerData));
let searchButton = document.getElementById('search'),
    searchKeyword = document.getElementById('searchKeyword');

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