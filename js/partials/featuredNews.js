Handlebars.registerPartial('featuredNews',
    `<section class="container" id="latest-news">
                    <div class="col-lg-12 no-pm with-hor-line" id="news-block-title">
                        <h1 class="red-title block-title f-left no-m">
                            <img class="block-icon" src="assets/images/ics/news.png" alt="News">Featured News</h1>
                        <a href="/article.html" class="btn btn-lg btn-red f-right"
                           style="margin-top: 10px; margin-left: -30px;">Archive</a>
                    </div>
                    <br class="clear">
                    <br>
                    <div class="col-md-6">
                        <div id="lt-news">
                        {{#each slidersNews }}
                            <div class="lt-news-item">
                                <a href="{{url}}" class="big-news-image"><img class="img-responsive" src="{{ image }}" alt="{{ title }}"></a>
                                <a href="{{url}}"><h1 class="red-title">{{ title }}</h1></a>
                                <span>Added At: {{ createdAt }} | Category: <a href="{{ url }}" class="red-title">{{ tagsStr }}</a> </span>
                                <p></p>
                            </div>
                        {{/each }}
                        </div>
                    </div>
                        <div class="col-md-6 no-pm">
                        {{#each latestNews}}
                            <div class="col-xs-6 more-news-block" >
                                <a href="#" class="more-news-img"><img src="{{ image }}" alt="{{ title }}"></a>
                                <a href="#"><h3 class="red-title">{{ title }}</h3></a>
                                <p>Added At: {{ createdAt }} | Category: <a href="{{ url }}" class="red-title">{{ tagsStr }}</a> </p>
                            </div>
                        {{/each }}
                        </div>
                </section>
                <br class="clear">
                <br>`);


document.addEventListener('news-data-loaded', ({ detail }) => {
    /**
     Compile the template
     */
    const containerFeaturedNews = $('#container-featured-news'), featuredNewsTemplate = $('#featured-news-template');
    const featuredNewsTemplateCompiled = Handlebars.compile(featuredNewsTemplate.html());
    /**
     * Loading Our Dummy Data and pass it to our partials
     * to render the data accordingly
     */
    /**
     * let's filter the data and get the latest news
     * sorted by created at ...
     */
    let latestNews = detail.data()
        // taken from https://stackoverflow.com/a/46545530/6531160 to shuffle our news randomly
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .sort((a, b) => (a.createdAt - b.createdAt) ? 1 : -1)
        .map(({ value }) => value)
        .slice(0, 4),
        slidersNews = latestNews.slice(1, 3);

    containerFeaturedNews.empty().append(featuredNewsTemplateCompiled({ slidersNews, latestNews }));


    $("#lt-news").owlCarousel({
        singleItem: true,
        lazyLoad: true,
        autoPlay: true
    });

})