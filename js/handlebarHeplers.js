/**
 * It takes a string and replaces all spaces with dashes
 * @param string - The string to be slugified.
 * @returns The string is being returned.
 */
function slugify(string) {
    return ![null, undefined, ''].includes(string) ? string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').split(' ').join('-') : string;
}

/**
 * Get the query string value of the given name, or return the default string if the query string value is not found.
 * @param name - The name of the query parameter you want to get.
 * @param defaultString - The default string to return if the query parameter is not found.
 * @returns The value of the query parameter with the name of the first argument, or the second argument if the query
 * parameter is not found.
 */
function getQueryByName(name, defaultString) {
    const queries = new URLSearchParams(location.search), input = queries.get(name);
    return input ?? defaultString;
}
/* A helper function that is used to prevent the html from being escaped. */
Handlebars.registerHelper('safe', function (text) {
    let result = String(new Handlebars.SafeString(text));
    return ![null, 'null', undefined, '', 'undefined'].includes(result) ? result : '';
});

/* A helper function that takes a string and replaces all spaces with dashes. */
Handlebars.registerHelper('slugify', (string) => {
    // simple code to slugify the string for better SEO,
    // title, so the search engines can crawl our site and racking it
    // search...
    return slugify(string);
});


/* A helper function that formats the date to the local date. */
Handlebars.registerHelper('formatDate', (data) => {
    // lets init our date to make sure we are able to format it
    let localDate = new Date(data);

    // now we are going to format it in local date. browser settings
    return localDate.toLocaleDateString("en-US");
});

/* A helper function that is used to build the url for the article.html and search.html pages. */
Handlebars.registerHelper('buildUrl', (n, source, options) => {
    console.log(n, source);
    // let's test our source, so we can dynamically
    // generate url upon source, and for reuse-ability ..
    switch (source) {
        case 'news':
            return '/article.html?' + slugify(n.title) + '&id=' + n.id;
        case 'search':
            return '/search.html?search=' + n.tagsStr;
        default:
            return '/'
    }
});

/* A helper function that checks if the string is null, empty or undefined. If it is, it returns the default string. */
Handlebars.registerHelper('stringWithDefault', (string, defaultString, options) => {
    return ![null, '', ""].includes(string) ? string : defaultString;
});

/* A helper function that gets the query string from the url. */
Handlebars.registerHelper('getQuery', (string, defaultString, options) => {
    return getQueryByName(string, defaultString);
});

/* A helper function that is used to check if the url path is the current url path. */
Handlebars.registerHelper('isCurrent', (urlPath, options) => {
    if (!urlPath) {
        return false;
    }
    let {
        pathname
    } = new URL(location.href);

    if (!pathname) {
        return false;
    }
    pathname = pathname.split('.')[0] ?? undefined;

    if (!Array.isArray(pathname) && urlPath === 'index') {
        return true
    }
    if (!pathname) {
        return false;
    }
    let current = pathname.split('/').filter((s) => ![null, undefined, ''].includes(s))[0] ?? undefined;
    return current === urlPath;
});



/* A helper function that gets the query string from the url. */
Handlebars.registerHelper('getCurrentBreadcrumb', (breadcrumb, defaultBreadcrumb, options) => {

    return breadcrumb || defaultBreadcrumb;
});