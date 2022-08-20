/**
 * The Single New Aside Partial
 */
Handlebars.registerPartial('singleNewASide', ` <aside class="no-pm" id="sidebar">
<div class="sidebar-block">
    <h2 class="red-title block-title mb-20">
    <i class="fa-solid fa-newspaper"></i>
        Smilier News
    </h2
    
    {{#each smilierNews}}
    <div>
    <a href="{{buildUrl this 'news'}}" class="big-news-image"><img class="img-responsive"
            src="{{ image }}" alt="{{ title }}"></a>
    <a href="{{buildUrl this 'news'}}">
        <h4 class="red-title">{{ title }}</h4>
    </a>
    <small>Added Date: {{ formatDate createdAt }} | Category: <a href="{{buildUrl this 'search'}}" class="green-title">{{ tagsStr }}</a></small>
    <p>{{safe singlNew.description }}</p>
</div>
    {{/each}}
</div>
</aside>`);

document.addEventListener('aside-needed', ({detail}) => {
    // let's get going and add some similar news
    // in aside of
    let smilierNews = detail.data().slice(0, 2);

    // aside section
    const containerSingleNewAside = $('#container-single-new-aside'),
        singleNewAsideTemplate = $('#single-new-aside-template');
    const singleNewAsideTemplateCompiled = Handlebars.compile(singleNewAsideTemplate.html());

    containerSingleNewAside.empty().append(singleNewAsideTemplateCompiled({smilierNews}));
})
