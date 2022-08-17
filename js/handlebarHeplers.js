function slugify(string) {

    return string.split(' ').join('-');
}
Handlebars.registerHelper('safe', function (text) {
    return new Handlebars.SafeString(String(text));
});

Handlebars.registerHelper('slugify', (string) => {

    // simple code to slugify the string for better SEO,
    // title, so the search engins can crowal our site and racking it
    // search...
    return slugify(string);
});


Handlebars.registerHelper('formatDate', (data) => {
    // let's inite our date to make sure we are able to format it
    let localDate = new Date(data);

    // now we are going to format it in local date. broswer settings
    return localDate.toLocaleDateString("en-US");
});

Handlebars.registerHelper('buildUrl', (n, source, options) => {

    // let's test our source  so we can dynimcaly
    // generate url upen source, and for reuseablity ..
    switch (source) {
        case 'news':
            return '/article.html?' + slugify(n.title) + '&id=' + n.id;
        case 'search':
            return '/search.html?search=' + n.tagsStr;
        default:
            return '/'
    }
});


Handlebars.registerHelper('stringWithDefault', (string, defaultString, options) => {


    return ![null, '', ""].includes(string) ? string : defaultString;
});


Handlebars.registerHelper('getQuery', (string, defaultString, options) => {

    const queries = new URLSearchParams(location.search),
        input = queries.get(string);
    return input ?? defaultString;
});