/* It's registering a partial template with the name `search` */
Handlebars.registerPartial('breadcrumb', `   <div class="row">
<div class="col-md-12">
    <ul class="breadcrumb">
        <li><a href="/"><i class="fa-solid fa-house-chimney"></i></a></li>
        {{#if parent }}
        <li><a href="/{{ parent }}.html">News</a></li>
        {{/if }}
        <li class="uk-active"><span>{{ getCurrentBreadcrumb currentBreadcrumb 'Current news title' }}</span></li>
    </ul>
</div>

</div>`);

document.addEventListener('currentBreadcrumb', ({ detail }) => {


    const containerBreadcrumb = $('#container-breadcrumb'), breadcrumbTemplate = $('#breadcrumb-template');
    const breadcrumbTemplateCompiled = Handlebars.compile(breadcrumbTemplate.html());

    containerBreadcrumb.empty().append(breadcrumbTemplateCompiled({ ...detail }));
})
