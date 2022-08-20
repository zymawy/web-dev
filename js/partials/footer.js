/**
 * The Footer Partial
 */
Handlebars.registerPartial('footer', `<section class="container-fluid" id="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-12 footer-block" id="footer-nav">
                                <h2>News Sections</h2>
                                <nav class="footer-nav">
                                    <li><a class="active-nav" href="/">Home</a></li>
                                    <li><a href="/contact.html">Contact Us</a></li>
                                    <li><a href="/articles.html">News</a></li>
                                </nav>
                            </div>
                            <div class="col-md-4 col-sm-12 footer-block" id="footer-contact">
                                <h2>Contact Us</h2>
                                <p>For Developers From Developers For Developers From Developers </p>
                                <form id="footer-contact-form">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="footer-contact-name"
                                               placeholder="First Name ">
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="footer-contact-email"
                                               placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" id="footer-contact-message" rows="5"
                                                  placeholder="Message Content"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-red">
                                         Send Message
                                    </button>
                                </form>
                            </div>

                            <div class="col-md-4 col-sm-12 footer-block" id="footer-info">
                                    <h1>Coder News </h1>
                                    <hr class="uk-article-divider">
                                    © 2012 - 2022 Coder News
                                    A division of dotdev inc.
                            </div>
                        </div>

                            </div>

                        </div>
                    </div>
                </section>`);

/**
 Compile the template
 */
const containerFooter = $('#container-footer'), footerTemplate = $('#footer-template');
const footerTemplateCompiled = Handlebars.compile(footerTemplate.html());
// OPTIONAL: Define data to pass to the template
const footerData = {}
containerFooter.empty().append(footerTemplateCompiled(footerData));
