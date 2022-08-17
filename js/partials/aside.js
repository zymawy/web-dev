
Handlebars.registerPartial('singleNewASide',
    ` <aside class="no-pm" id="sidebar">
<div class="sidebar-block">
    <h2 class="green-title block-title"><img class="block-icon"
            src="assets/images/ics/news.png" alt="News">Smilier News</h2>
    <br>
    {{#each smilierNews}}
    <div class="news-latest">
    <a href="{{buildUrl this 'news'}}" class="big-news-image"><img class="img-responsive"
            src="{{ image }}" alt="{{ title }}"></a>
    <a href="{{buildUrl this 'news'}}">
        <h2 class="green-title">{{ title }}</h2>
    </a>
    <span>Added Date: {{ formatDate createdAt }} | Category: <a href="{{buildUrl this 'search'}}" class="green-title">{{ tagsStr }}</a></span>
    <p>{{safe singlNew.description }}</p>
</div>
    {{/each}}
</div>
</aside>`
);

document.addEventListener('aside-needed', ({ detail }) => {
    let smilierNews = detail.data().slice(0, 2);

    // aside section
    const containerSingleNewAside = $('#container-single-new-aside'),
        singleNewAsideTemplate = $('#single-new-aside-template');
    const singleNewAsideTemplateCompiled = Handlebars.compile(
        singleNewAsideTemplate.html()
    );

    containerSingleNewAside.empty().append(singleNewAsideTemplateCompiled({ smilierNews }));
})