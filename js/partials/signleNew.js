/**
 * The Footer Partial
 */
Handlebars.registerPartial('singleNew',
    ` <article class="uk-article">
    <h1 class="uk-article-title green-title">{{ singlNew.title }}</h1>
    <p class="uk-article-meta">Date Added: {{formatDate singlNew.createdAt }} | Category: <a href="/search.html?tag={{ singlNew.tagsStr }}">{{ singlNew.tagsStr }}</a> </p>
    <p class="uk-article-lead"><img class="img-responsive"
            src="{{ singlNew.image }}" alt="{{ singlNew.title }}"></p>
            <p>{{safe singlNew.description }}</p>
    <p>Share:
        <a class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>
        <a class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>
    </p>

</article>
<br class="clear">
<br>`
);

/**
 * The Footer Partial
 */
Handlebars.registerPartial('singleNewComments',
    `  <h2 class="block-title green-title"><img class="block-icon"
    src="assets/images/ics/comments.png">Comments: </h2>
<br>
{{#if hasComment}}
    {{#each singleNewData.comments}}
    <br class="clear">
    <div class="comment-item">
    <div class="col-xs-1 comment-avatar"></div>
    <div class="col-xs-10 comment-info">
        <h3 class="green-title">اسم المعلق هنا في سطر واحد او سطرين</h3>
        <p class="uk-article-meta">ادخل بتاريخ: 22/5/2015</p>
        <p>وكان الرئيس الفرنسي فرانسوا هولاند دعا أمس، وبعد اجتماع خلية الأزمة في قصر
            الإليزيه غداة يوم حداد وطني "كل المواطنين" إلى التظاهر الأحد في مسيرات
            للتنديد "بالمجزرة" التي حصلت في مقر الصحيفة الفرنسية الساخرة، مشيرا إلى أنها
            لإثبات "الوحدة الوطنية ضد الإرهاب".</p>
    </div>
    <br class="clear">
    {{/each}}
{{else}}
    <h1>No Comment Yat Be First!</h1>
{{/if }}

</div>
<br class="clear">
<h2 class="block-title green-title"><img class="block-icon"
    src="assets/images/ics/comments.png">Add Your Comment : </h2>
<br>
<br class="clear">
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
</form>`
);


document.addEventListener('news-data-loaded', ({ detail }) => {
    const queries = new URLSearchParams(location.search),
        id = queries.get('id');

    // let's check if we have an id befor,
    // accessing and fetching our data!
    if (!id) {
        throw new Error('Error fetching new!, Please try again leter, or contact the suppert team')
    }

    // let's get going and get our new from
    // our database :)
    let singlNew = detail.data().find((n) => n.id === id);

    const containerSingleNew = $('#container-single-new'),
        singleNewTemplate = $('#single-new-template');
    const singleNewTemplateCompiled = Handlebars.compile(
        singleNewTemplate.html()
    );
    // OPTIONAL: Define data to pass to the template
    const singleNewData = { singlNew }
    containerSingleNew.empty().append(singleNewTemplateCompiled(singleNewData));

    // comments section ...
    const containerSingleNewComment = $('#container-single-new-comment'),
        singleNewCommentTemplate = $('#single-new-comment-template');
    const singleNewCommentTemplateCompiled = Handlebars.compile(
        singleNewCommentTemplate.html()
    );
    let commentsData = { hasComment: singleNewData.comments, singleNewData }
    containerSingleNewComment.empty().append(singleNewCommentTemplateCompiled(commentsData));


    const AsideNeededEvent = new CustomEvent('aside-needed', {
        bubbles: true,
        detail: {
            data: () => detail.data()
        }
    });
    // let's dispatch it !
    document.dispatchEvent(AsideNeededEvent)
})