/* Registering a partial template with the name `mostVisitNews` */
Handlebars.registerPartial('mostVisitNews', ` 
<div class="home-block">
    <div class="container" id="news-projects-inner">
        <div class="home-block__title " id="news-block-title">
            <h1 class="red-title block-title no-m bg-white">
                <i class="fa-solid fa-code"></i>
                For Developers
            </h1>       
        </div>                        
        <div class="col-md-12 slide-holder" id="projects-items">
        {{#each news}}
            <div class="slide-item">
                <a href="{{buildUrl this 'news'}}"><img src="{{ image }}" alt="{{ title }}"></a>
                <a href="{{buildUrl this 'news'}}"><h4 class="red-title title-trimmed">{{ title }}</h4></a>
            </div>
        {{/each}}
    </div>
    </div>
</div>
`);

document.addEventListener('news-data-loaded', ({detail}) => {
    /**
     Compile the template
     */
    const containerMostVisitNews = $('#container-most-visit'), mostVisitNewsTemplate = $('#most-visit-news-template');
    const mostVisitNewsTemplateCompiled = Handlebars.compile(mostVisitNewsTemplate.html());

    /**
     * Loading Our Dummy Data and pass it to our partials
     * to render the data accordingly
     /**
     * let's filter the data and get the latest news
     * sorted by created at ...
     */
    let news = detail.data()
    .sort((a, b) => (a.views - b.views) ? 1 : -1)
    .slice(0, 7);

    containerMostVisitNews.empty().append(mostVisitNewsTemplateCompiled({news}));

    $("#projects-items").owlCarousel({
        items: 4, lazyLoad: true, autoPlay: true
    });
})
