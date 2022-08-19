/* Registering a partial with the name `nav` and the content of the partial is the html code. */
Handlebars.registerPartial('nav', `<nav class="st-menu st-effect-3" id="main-nav">
    <h2>Menu</h2>
    <ul>
        <li>
        {{#if (isCurrent 'index') }}
            <a  class="active-nav" href="/">Home</a>
        {{else}}
            <a href="/">Home</a>
        {{/if}}
        </li>
        <li>
        {{#if (isCurrent 'contact') }}
            <a class="active-nav" href="/contact.html">Contact Us</a>
            {{else}}
            <a href="/contact.html">Contact Us</a>
        {{/if}}
        </li>
        <li>
        {{#if (isCurrent 'articles') }}
            <a class="active-nav" href="/articles.html">News</a>
            {{else}}
            <a href="/articles.html">News</a>
         {{/if}} 
        </li>
    </ul>
    <ul id="mo-social-links">
        <li class="mo-social-links-li"><a class="mo-social-links-a" href="#"><img
                    src="/assets/images/ics/fb.png" alt="Faecbook"> </a> </li>
        <li class="mo-social-links-li"><a class="mo-social-links-a" href="#"><img
                    src="/assets/images/ics/tw.png" alt="Twitter"> </a> </li>
        <li class="mo-social-links-li"><a class="mo-social-links-a" href="#"><img
                    src="/assets/images/ics/yt.png" alt="Youtube"> </a> </li>
        <li class="mo-social-links-li"><a class="mo-social-links-a" href="#"><img
                    src="/assets/images/ics/in.png" alt="Instagram"> </a> </li>
        <br class="clear"><br>
        <div class="input-group">
            <input type="text" id='searchKeywordMobile' class="form-control" placeholder="Search...">
            <span class="input-group-btn"><button id='searchMobile' class="btn btn-default"
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
