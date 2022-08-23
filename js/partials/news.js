/* It's registering a partial template with the name `news` */
Handlebars.registerPartial('news', ` <div class="container">
    <div class="row">
    <div class="col-xs-12">
    <h2 class="red-title block-title mb-20">
        <i class="fa-solid fa-newspaper"></i>
        News Archive:
        </h2>
</div>

        {{#each news}}
        <div class="col-md-3 col-xs-6 more-news-block">
			<a href="{{buildUrl this 'news'}}" class="more-news-img">
			<img src="{{ image }}" alt="{{ image }}">
			</a>
			<a href="{{buildUrl this 'news'}}"><h3 class="red-title title-trimmed">{{ title }}</h3></a>
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

