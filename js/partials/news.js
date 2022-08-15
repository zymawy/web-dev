/**
 * The News Partial
 */
Handlebars.registerPartial('news',
    ` <div class="container">
    <div class="row">
        <h1 class="green-title">News :</h1>
        <br>
        {{#each news}}
            <div class="col-sm-4 slide-item">
                <a href="#"><img class="img-responsive" src="{{ image }}"
                        alt="{{ image }}"></a>
                <a href="{{ url }}" target='_blank'>
                    <h4 class="green-title">{{ title }}</h4>
                </a>
            </div>
        {{/each }}
        <div class="row" style="text-align: center;">
            <nav>
                <ul class="pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>`
);

/**
* let's check if the our client is coming from
* featuredNews, in case it's we are going to fetch
* our data news based on the client wishes :) ..
*/

document.addEventListener('news-data-loaded', ({ detail }) => {
    const containerNews = $('#container-news'),
        NewsTemplate = $('#news-template');
    const NewsTemplateCompiled = Handlebars.compile(
        NewsTemplate.html()
    );
    let highLights = detail.data();
    // OPTIONAL: Define data to pass to the template
    const newsData = {
        news: highLights.slice(0, 20)
    }
    containerNews.empty().append(NewsTemplateCompiled(newsData));

});

