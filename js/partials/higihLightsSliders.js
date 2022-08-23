/**
 * The HigihLights Partial
 * registering a partial template with the name `higihLightsSliders`
 */
Handlebars.registerPartial('higihLightsSliders', `<section class="container-fluid">
    <div class="container bg-gray" style="padding: 30px 20px;">
        <div id="high-light-slider">
        	{{#each highLights}}
        	<div class="row project-item mb-20">
				<div class="col-md-6 col-xs-12 mb-sm-20">
					<a href="{{ buildUrl this 'news' }}" class="mb-20">
						<h2 class="red-title">{{ title }}</h2>
					</a>
					<p class="mb-20">{{ title }}</p>
					<a href="{{ buildUrl this 'news' }}" terget="_blank" class="btn p-0">Countune Reading...</a>
				</div>
        		<div class="col-md-6 col-xs-12">
        			<a href="{{ buildUrl this 'news' }}">
        				<img class="img-responsive" src="{{ image }}" alt="{{ title }}">
					</a>
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

