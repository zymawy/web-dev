/**
 * The News Partial
 */
Handlebars.registerPartial('nav',
    `<nav class="st-menu st-effect-3" id="main-nav">
    <h2>Menu</h2>
    <ul>
        <li><a class="active-nav" href="/">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="/articles.html">News</a></li>
        <li><a href="/search.html">Coder News Partners</a></li>
    </ul>
    <ul id="mo-social-links">
        <li class="mo-social-links-li"><a class="mo-social-links-a" href="#"><img
                    src="assets/images/ics/fb.png" alt="Faecbook"> </a> </li>
        <li class="mo-social-links-li"><a class="mo-social-links-a" href="#"><img
                    src="assets/images/ics/tw.png" alt="Twitter"> </a> </li>
        <li class="mo-social-links-li"><a class="mo-social-links-a" href="#"><img
                    src="assets/images/ics/yt.png" alt="Youtube"> </a> </li>
        <li class="mo-social-links-li"><a class="mo-social-links-a" href="#"><img
                    src="assets/images/ics/in.png" alt="Instagram"> </a> </li>
        <br class="clear"><br>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search...">
            <span class="input-group-btn"><button class="btn btn-default"
                    type="button">Search</button></span>
        </div>
    </ul>
</nav>`);


/**
 Compile the template
 */
const containerNav = $('#container-nav'), navTemplate = $('#nav-template');
const navTemplateCompiled = Handlebars.compile(navTemplate.html());
/**
 * Loading Our Dummy Data and pass it to our partials
 * to render the data accordingly
 */
/**
 * let's filter the data and get the latest news
 * sorted by created at ...
 */

containerNav.empty().append(navTemplateCompiled({}));
