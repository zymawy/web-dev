/* It's registering a partial template with the name `search` */
Handlebars.registerPartial('breadcrumb', `   <div class="row">
<div class="col-md-12">
    <ul class="uk-breadcrumb">
        <li><a href="#"><i class="fa-solid fa-house-chimney"></i></a></li>
        <li><a href="#">News</a></li>
        <li class="uk-active"><span>Current news title</span></li>
    </ul>
</div>

</div>`);

// document.addEventListener('news-data-loaded', ({ detail }) => {

const containerBreadcrumb = $('#container-breadcrumb'), breadcrumbTemplate = $('#breadcrumb-template');
const breadcrumbTemplateCompiled = Handlebars.compile(breadcrumbTemplate.html());


containerBreadcrumb.empty().append(breadcrumbTemplateCompiled({}));
// })
