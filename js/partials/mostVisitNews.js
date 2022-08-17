Handlebars.registerPartial('mostVisitNews', ` <div class="container" id="news-projects-inner">
                        <div class="row">
                            <br>
                        <div class="col-lg-12 no-pm with-hor-line" >
                            <h1 class="red-title block-title no-pm f-left" style="background-color: #fefefe;"><img
                                    class="block-icon" src="assets/images/ics/projects.png" alt="News">For Developers</h1>
                        </div>
                            <br>
                            <br class="clear">
                            <br><br>
                             <div class="col-md-12 slide-holder" id="projects-items">
                             {{#each news}}
                                 <div class="slide-item">
                                    <a href="{{buildUrl this 'news'}}"><img src="{{ image }}" alt="{{ title }}"></a>
                                    <a href="{{buildUrl this 'news'}}"><h4 class="red-title">{{ title }}</h4></a>
                                </div>
                             {{/each}}

                             </div>
                        </div>
                    </div>
                    <br>`);

document.addEventListener('news-data-loaded', ({ detail }) => {
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
        .slice(0, 7), featuredNews = news[0];

    containerMostVisitNews.empty().append(mostVisitNewsTemplateCompiled({ news }));

    $("#projects-items").owlCarousel({
        items: 4,
        lazyLoad: true,
        autoPlay: true
    });

})
