/**
 * The Footer Partial
 */
Handlebars.registerPartial('footer',
    `<section class="container-fluid" id="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2  footer-block" id="footer-nav">
                                <h2>News Sections</h2>
                                <nav class="footer-nav">
                                    <li><a class="active-nav" href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Coder News Partners</a></li>
                                </nav>
                            </div>
                            <div class="col-lg-5 footer-block" id="footer-contact">
                                <h2>Contect Us</h2>
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
                            <div class="col-lg-5  footer-block" id="footer-info">
                            <div class="col-md-4 col-lg-5 reusable-block" id="polls">
                            <h2 class="block-title red-title"> <img class="block-icon"
                                                                    src="assets/images/ics/polls.png"
                                                                    alt="Honor">Polls & Questions
                            </h2>
                            <br class="clear">
                            <br>
                            <div class="panel">
                                <div class="panel-body">
                                    <p>For Developers From Developers For Developers From Developers</p>
                                </div>
                            </div>
                            <div class="poll-options">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                            <label>
                                                <input type="radio" name="optionsRadios">
                                                For Developers From Developers
                                            </label>
                                    </li>
                                    <li class="list-group-item">
                                        <label>
                                            <input type="radio" name="optionsRadios">
                                            For Developers From Developers
                                        </label>
                                    </li>
                                    <li class="list-group-item">
                                        <label>
                                            <input type="radio" name="optionsRadios">
                                            For Developers From Developers
                                        </label>
                                    </li>
                                    <li class="list-group-item">
                                        <label>
                                            <input type="radio" name="optionsRadios">
                                            For Developers From Developers
                                        </label>
                                    </li>
                                </ul>
                                <a href="#" class="btn btn-lg btn-red"> Submit vote </a> | <a href="#"
                                                                                        id="view-poll-results">See Votes Results</a>
                            </div>
                            <div class="poll-results">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                        <span class="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                        <span class="sr-only">20% Complete</span>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                        <span class="sr-only">60% Complete (warning)</span>
                                    </div>
                                </div>
                                <div class="progress">

                                    <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                        <span class="sr-only">80% Complete (danger)</span>
                                    </div>
                                </div>
                                <a href="#" id="back-to-vote">back to vote</a>
                            </div>
                        </div>

                            </div>

                        </div>
                    </div>
                </section>`
);

/**
 Compile the template
 */
const containerFooter = $('#container-footer'),
    footerTemplate = $('#footer-template');
const footerTemplateCompiled = Handlebars.compile(
    footerTemplate.html()
);
// OPTIONAL: Define data to pass to the template
const footerData = {}
containerFooter.empty().append(footerTemplateCompiled(footerData));
