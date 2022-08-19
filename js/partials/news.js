/* It's registering a partial template with the name `news` */
Handlebars.registerPartial('news', ` <div class="container">
    <div class="row">
        <h1 class="green-title">News :</h1>
        <br>
        {{#each news}}
            <div class="col-sm-4 slide-item">
                <a href="{{buildUrl this 'news'}}"><img class="img-responsive" src="{{ image }}"
                        alt="{{ image }}"></a>
                <a href="{{buildUrl this 'news'}}">
                    <h4 class="green-title">{{ title }}</h4>
                </a>
            </div>
        {{/each }}
    </div>
</div>`);

/**
 * let's check if the our client is coming from
 * featuredNews, in case it's we are going to fetch
 * our data news based on the client wishes :) ..
 */

document.addEventListener('news-data-loaded', ({detail}) => {
    const containerNews = $('#container-news'), NewsTemplate = $('#news-template');
    const NewsTemplateCompiled = Handlebars.compile(NewsTemplate.html());
    let highLights = detail.data();
    // OPTIONAL: Define data to pass to the template
    const newsData = {
        news: highLights.slice(0, 20)
    }
    containerNews.empty().append(NewsTemplateCompiled(newsData));

});

