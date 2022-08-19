/* It's registering a partial template with the name `search` */
Handlebars.registerPartial('search', ` <div class="col-md-8" id="content-bar">
    <br class="clear">
    <div class="page-inner-header" id="gallery-inner-header">
        <img class="block-icon f-right" style="margin-right:20px;"
            src="/assets/images/ics/search-big-ic.png" alt="Big Icon">
        <h1 class="uk-article-title f-right">Search Results</h1>
        <br class="clear">
    </div>
    <br class="clear">
    <br>
    <h1>Looking for <span class="green-title">{{ getQuery 'search' '' }}</span> ... result</h1>
    <p class="uk-article-meta">The Result was found in {{took}}</p>
    <br class="clear">
    {{#each searchResults }}
    <div>
        <a href="{{ buildUrl this 'news' }}">
            <h3 class="green-title">{{ title }}</h3>
        </a>
        <p>{{ stringWithDefault description tagsStr }}</p>
    </div>
    <hr class="uk-article-divider">
    {{/each }}
</div>`);

document.addEventListener('news-data-loaded', ({detail}) => {
    const queries = new URLSearchParams(location.search), search = queries.get('search');

    // let's check if we have an id befor,
    // accessing and fetching our data!
    if (!search) {
        throw new Error('Error fetching new!, Please try again leter, or contact the suppert team')
    }

    console.log(search);

    // let's get going and get our new from
    // our database :)
    let searchResults = detail.data().filter((n) => {
        return (n.title && n.title.includes(search)) || (n.tagsStr && n.tagsStr.includes(search)) || (n.description && n.description.includes(search))
    }).slice(0, 10);

    const containerSearch = $('#container-search'), searchNewTemplate = $('#search-template');
    const searchTemplateCompiled = Handlebars.compile(searchNewTemplate.html());

    console.log(searchResults);
    containerSearch.empty().append(searchTemplateCompiled({...{searchResults}, ...{took: Math.random()}}));

    const AsideNeededEvent = new CustomEvent('aside-needed', {
        bubbles: true, detail: {
            data: () => detail.data()
        }
    });
    // let's dispatch it !
    document.dispatchEvent(AsideNeededEvent)
})
