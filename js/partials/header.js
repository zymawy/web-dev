/**
 * The Header Partial
 */
Handlebars.registerPartial('header',
    `<header class="container-fluid" id="main-header">
                <div id="header-top">
                    <div class="container" id="top-header-cont">
                        <ul id="nav-trigger-name">
                            <li id="st-trigger-effects" class="nav-trigger">
                                <button data-effect="st-effect-3" id="nav-tr"></button>
                            </li>
                            <li id="foundation-name">
                                <h1 id="foundation-head-name">{{ title }}</h1>
                                <h2 id="foundation-head-slogan">{{ subTitle }}</h2>
                            </li>
                        </ul>
                        <ul class="row f-right" id="social-links">
                            {{#each socialLinks}}
                                <li><a href="#"><img src="{{ this.icon }}" alt="{{ this.name }}"> </a> </li>
                            {{/each}}
                            <br class="clear"><br>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search...">
                                <span class="input-group-btn"><button class="btn btn-default" type="button">Search
                                </button></span>
                            </div>
                        </ul>
                    </div>
                </div>
            </header>
                <br>`
);

/**
 Compile the template
*/
const containerHeader = $('#container-header'),
    headerTemplate = $('#header-template');
const headerTemplateCompiled = Handlebars.compile(
    headerTemplate.html()
);
// OPTIONAL: Define data to pass to the template
const headerData = {
    title: "Coder News ",
    subTitle: "For Developers From Developers",
    socialLinks: [
        { icon: 'assets/images/ics/fb.png', name: "Facebook" },
        { icon: 'assets/images/ics/tw.png', name: "Twitter" },
        { icon: 'assets/images/ics/yt.png', name: "Youtube" },
        { icon: 'assets/images/ics/in.png', name: "Instagram" },
    ]
}
containerHeader.empty().append(headerTemplateCompiled(headerData));
