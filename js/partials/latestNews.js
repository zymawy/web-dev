/* Registering a partial template with the name `latestNews` */
Handlebars.registerPartial('latestNews', `<section class="container" id="welcome-section">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 class="red-title block-title" style="margin-top:0 !important;">Latest News</h1>
                                </div>
                            </div>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="{{buildUrl this 'news'}}" class="d-block mb-30">
                                    <img src="{{ featuredNews.image }}" class="img-responsive" alt="{{ featuredNews.title }}">
                                </a>
                                <h3 class="red-title">
                                    <a href="{{buildUrl this 'news'}}">{{ featuredNews.title }}</a>
                                </h3>
                                <p>{{ featuredNews.description }}</p>
                                <br>
                            </div>
                            <div class="col-md-6">
                             {{#each news}}
                                <div class="col-md-12 no-pm mb-30">
                                    <h3 class="red-title">
                                        <a href="{{buildUrl this 'news'}}">{{this.title}}</a>
                                    </h3>
                                    <div class="row">
                                        <div class="col-xs-4">
                                            <a href="{{buildUrl this 'news'}}">
                                                <img class="wide" src="{{this.image}}" alt="{{this.title}}">
                                            </a>
                                        </div>
                                        <div class="col-xs-8 no-pm">
                                            <p  style="display: block; margin:0 !important;">
                                                {{this.description}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            {{/each}}
                        </div>
                        </div>
                </section>
                <br class="clear">
                <br>`);

document.addEventListener('news-data-loaded', ({detail}) => {
    /**
     Compile the template
     */
    const containerLatestNews = $('#container-latest-news'), latestNewsTemplate = $('#latest-news-template');
    const latestNewsTemplateCompiled = Handlebars.compile(latestNewsTemplate.html());
    /**
     * Loading Our Dummy Data and pass it to our partials
     * to render the data accordingly
     */
    /**
     * let's filter the data and get the latest news
     * sorted by created at ...
     */
    let news = detail.data()
    .sort((a, b) => (a.createdAt - b.createdAt) ? 1 : -1)
    .slice(0, 4), featuredNews = news[0];

    containerLatestNews.empty().append(latestNewsTemplateCompiled({news: news.slice(1, 4), featuredNews}));
})
