/* It's a partial template, it's a template that we can use in other templates */
Handlebars.registerPartial('singleNew', ` <article class="uk-article">
    <h1 class="uk-article-title green-title mb-20">{{ singleNew.title }}</h1>
    <p class="uk-article-meta">Date Added: {{formatDate singleNew.createdAt }} | Category: <a href="/search.html?tag={{ singleNew.tagsStr }}">{{ singleNew.tagsStr }}</a> </p>
    <p class="uk-article-lead"><img class="img-responsive"
            src="{{ singleNew.image }}" alt="{{ singleNew.title }}"></p>
            <p>{{safe singleNew.description }} How scientists caught footage of 'the kraken' after centuries of searching
            How scientists caught footage of 'the kraken' after centuries of searchingHow scientists caught footage of 'the kraken' after centuries of searchingHow scientists caught footage of 'the kraken' after centuries of searching

            How scientists caught footage of 'the kraken' after centuries of searchingHow scientists caught footage of 'the kraken' after centuries of searching
            How scientists caught footage of 'the kraken' after centuries of searching
            </p>
    <p>Share:
        <a class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>
        <a class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>
    </p>
</article>
<br class="clear">
<br>`);

/**
 * The Footer Partial
 */
Handlebars.registerPartial('singleNewComments', `
<h2 class="block-title green-title mb-20">
    <i class="fa-solid fa-comments"></i>
    Comments:
</h2>
{{#if hasComment}}
    {{#each singleNewData.comments}}
    <br class="clear">
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
<div class="flexable flexable--center mb-20 mt-20">
<h5>No Comment Yat Be First!</h5>
</div>
{{/if }}
</div>

<h2 class="block-title green-title mb-20">
<i class="fa-solid fa-comment"></i>
Add new comment:
</h2>
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
<button type="submit" class="btn btn-lg btn-green">Submit</button>
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
})
