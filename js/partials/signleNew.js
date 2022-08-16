/**
 * The Footer Partial
 */
Handlebars.registerPartial('singleNew',
    ` <article class="uk-article">
    <h1 class="uk-article-title green-title">{{ singlNew.title }}</h1>
    <p class="uk-article-meta">Date Added: {{formatDate singlNew.createdAt }} | Category: <a href="/search.html?tag={{ singlNew.tagStr }}">{{ singlNew.tagStr }}</a> </p>
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

</div>
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

</div>
<br class="clear">
<h2 class="block-title green-title"><img class="block-icon"
    src="assets/images/ics/comments.png">أضف تعليقك: </h2>
<br>
<br class="clear">
<form id="article-comment-post">
<div class="form-group">
    <input type="email" class="form-control" id="footer-contact-name"
        placeholder="اسمك الكريم">
</div>
<div class="form-group">
    <input type="email" class="form-control" id="footer-contact-email"
        placeholder="بريدك الالكتروني">
</div>
<div class="form-group">
    <textarea class="form-control" id="footer-contact-message" rows="5"
        placeholder="نص الرسالة"></textarea>
</div>
<button type="submit" class="btn btn-lg btn-green">اضف تعليك الان</button>
</form>`
);


Handlebars.registerPartial('singleNewASide',
    ` <aside class="col-md-4 no-pm" id="sidebar">
    <div class="sidebar-block">
        <h2 class="green-title block-title"><img class="block-icon"
                src="assets/images/ics/news.png" alt="News">Smilier News</h2>
        <br>
        {{#each smilierNews}}
        <div class="news-latest">
        <a href="{{buildUrl this}}" class="big-news-image"><img class="img-responsive"
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
    containerSingleNewComment.empty().append(singleNewCommentTemplateCompiled(singleNewData));


    // aside section
    const containerSingleNewAside = $('#container-single-new-aside'),
        singleNewAsideTemplate = $('#single-new-aside-template');
    const singleNewAsideTemplateCompiled = Handlebars.compile(
        singleNewAsideTemplate.html()
    );

    // let's get going and try find a (recommended / smailier ) news
    // in our database :)
    let smilierNews = detail.data().filter((n) => n.tagsStr.includes(singlNew.tagsStr) || n.tagsStr.includes(singlNew.title)).slice(0, 4);
    console.log(smilierNews);

    containerSingleNewAside.empty().append(singleNewAsideTemplateCompiled({ smilierNews }));
})