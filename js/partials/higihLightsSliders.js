/**
 * The HigihLights Partial
 * registering a partial template with the name `higihLightsSliders`
 */
Handlebars.registerPartial('higihLightsSliders', `<section class="container-fluid">
    <div class="container" id="content-container">
        <div class="row" id="high-light-slider">
        {{#each highLights}}
            <div class="project-item">
                <div class="col-sm-6">
                    <a href="{{ buildUrl this 'news' }}">
                        <h1 class="green-title">{{ title }}</h1>
                    </a>
                    <p>{{ title }}</p>
                    <a href="{{ buildUrl this 'news' }}" terget="_blank" class="btn btn-lg btn-green">Countune Reading...</a>
                </div>
                <br>
                <div class="col-sm-6">
                    <a href="{{ buildUrl this 'news' }}"><img class="img-responsive"
                            src="{{ image }}" alt="{{ title }}"> </a>
                </div>
            </div>
            {{/each}}
        </div>
    </div>
</section>`);

/**
 * let's check if the our client is coming from
 * featuredNews, in case it's we are going to fetch
 * our data news based on the client wishes :) ..
 */

document.addEventListener('news-data-loaded', ({detail}) => {
    const containerHighLights = $('#container-higih-lights'), highLightsTemplate = $('#higih-lights-template');
    const highLightsTemplateCompiled = Handlebars.compile(highLightsTemplate.html());
    let highLights = detail.data();
    if (getQueryByName('q', '') === 'featuredNews') {
        highLights = highLights
        .sort((a, b) => (a.createdAt - b.createdAt) ? 1 : -1)
    }

    const highLightsData = {
        highLights: highLights.slice(0, 3)
    }
    containerHighLights.empty().append(highLightsTemplateCompiled(highLightsData));

    $(function () {
        $("#high-light-slider").owlCarousel({
            singleItem: true, lazyLoad: true, autoPlay: true
        });
    });

});

