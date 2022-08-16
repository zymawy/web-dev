/**
 * The HigihLights Partial
 */
Handlebars.registerPartial('higihLightsSliders',
    `<section class="container-fluid">
    <div class="container" id="content-container">
        <div class="row" id="high-light-slider">
        {{#each highLights}}
            <div class="project-item">
                <div class="col-sm-6">
                    <a href="/article.html?id={{ id }}">
                        <h1 class="green-title">{{ title }}</h1>
                    </a>
                    <p>{{ title }}</p>
                    <a href="/article.html?id={{ id }}" terget="_blank" class="btn btn-lg btn-green">Countune Reading...</a>
                </div>
                <br>
                <div class="col-sm-6">
                    <a href="#"><img class="img-responsive"
                            src="{{ image }}" alt="{{ title }}"> </a>
                </div>
            </div>
            {{/each}}
        </div>
    </div>
</section>`
);

/**
 * let's check if the our client is coming from
 * featuredNews, in case it's we are going to fetch
 * our data news based on the client wishes :) ..
*/

document.addEventListener('news-data-loaded', ({ detail }) => {
    const containerHigihLights = $('#container-higih-lights'),
        higihLightsTemplate = $('#higih-lights-template');
    const higihLightsTemplateCompiled = Handlebars.compile(
        higihLightsTemplate.html()
    );
    let highLights = detail.data();
    if (q === 'featuredNews') {
        highLights = highLights
            .sort((a, b) => (a.createdAt - b.createdAt) ? 1 : -1)
    }
    // OPTIONAL: Define data to pass to the template
    const higihLightsData = {
        highLights: highLights.slice(0, 3)
    }
    containerHigihLights.empty().append(higihLightsTemplateCompiled(higihLightsData));

    $(function () {
        $("#high-light-slider").owlCarousel({
            singleItem: true,
            lazyLoad: true,
            autoPlay: true
        });
    });

});

