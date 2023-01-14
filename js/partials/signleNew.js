/* It's a partial template, it's a template that we can use in other templates */
Handlebars.registerPartial('singleNew', ` <article class="uk-article">
    <h1 class="uk-article-title green-title mb-20">{{ singleNew.title }}</h1>
    <p class="uk-article-meta">Date Added: {{formatDate singleNew.createdAt }} | Category: <a href="search.html?search={{ singleNew.tagsStr }}">{{ singleNew.tagsStr }}</a> </p>
    <p class="uk-article-lead"><img class="img-responsive"
            src="{{ singleNew.image }}" alt="{{ singleNew.title }}"></p>
            <p>{{safe singleNew.description }} </p>
    <hr />
    <p>Share:
        <a class="btn btn-social"><i class="fa-brands fa-facebook"></i></a>
        <a class="btn btn-social"><i class="fa-brands fa-twitter"></i></a>
        <a class="btn btn-social"><i class="fa-brands fa-instagram"></i></a>
    </p>
</article>`);

/**
 * The Footer Partial
 */
Handlebars.registerPartial('singleNewComments', `

{{#if hasComment}}
<h3 class="block-title green-title mb-20">
    <i class="fa-solid fa-comments"></i> Comments:
</h3>
    {{#each singleNewData.comments}}
    <div class="comment-item">
    <div class="col-xs-1 comment-avatar"></div>
    <div class="col-xs-10 comment-info">
        <h3 class="green-title">{{ author }}</h3>
        <p class="uk-article-meta">Date: {{ createdAt }}</p>
        <p>{{ comment }}</p>
    </div>
    <br class="clear">
    {{/each}}
{{else}}
<div class="flexable flexable--center bg-gray padded-20 mb-20 mt-20">
	<h5>No Comments Yet... Be The First commenter!</h5>
</div>
{{/if }}
</div>

<h3 class="block-title green-title mb-20">
<i class="fa-solid fa-comment"></i>
Add new comment:
</h3>
<form id="article-comment-post">
<div class="form-group">
    <input type="email" class="form-control" id="footer-contact-name"
        placeholder="Full Name">
</div>
<div class="form-group">
    <input type="email" class="form-control" id="footer-contact-email"
        placeholder="E-mail">
</div>
<div class="form-group">
    <textarea class="form-control" id="footer-contact-message" rows="5"
        placeholder="Message Content"></textarea>
</div>
<button type="submit" class="btn btn-lg btn-red wide">Submit</button>
</form>`);


document.addEventListener('news-data-loaded', ({ detail }) => {
    const queries = new URLSearchParams(location.search), id = queries.get('id');

    // let's check if we have an id before,
    // accessing and fetching our data!
    if (!id) {
        throw new Error('Error fetching new!, Please try again later, or contact the support team')
    }

    // let's get going and get our new from
    // our database :)
    let singleNew = detail.data().find((n) => n.id === id);

    const containerSingleNew = $('#container-single-new'), singleNewTemplate = $('#single-new-template');
    const singleNewTemplateCompiled = Handlebars.compile(singleNewTemplate.html());

    const singleNewData = { singleNew: singleNew }
    containerSingleNew.empty().append(singleNewTemplateCompiled(singleNewData));

    // comments section ...
    const containerSingleNewComment = $('#container-single-new-comment'),
        singleNewCommentTemplate = $('#single-new-comment-template');
    const singleNewCommentTemplateCompiled = Handlebars.compile(singleNewCommentTemplate.html());
    let commentsData = { hasComment: singleNewData.comments, singleNewData }
    containerSingleNewComment.empty().append(singleNewCommentTemplateCompiled(commentsData));


    const AsideNeededEvent = new CustomEvent('aside-needed', {
        bubbles: true, detail: {
            data: () => detail.data()
        }
    });
    // let's dispatch it !
    document.dispatchEvent(AsideNeededEvent)

    console.log(singleNew);
    // let's notify our breadcrumb for current url
    const currentBreadcrumb = new CustomEvent('currentBreadcrumb', {
        bubbles: true, detail: {
            currentBreadcrumb: singleNew.title,
            parent: 'articles'// the apper level of the breadcreumb
        }
    });
    console.log(currentBreadcrumb);
    // let's dispatch it !
    document.dispatchEvent(currentBreadcrumb)
})
