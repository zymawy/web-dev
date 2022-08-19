/* Registering a partial template. */
Handlebars.registerPartial('partners', ` <section class="container-fluid" id="success-partners">
    <div class="container-fluid with-hor-line" id="wide-title">
        <div class="col-lg-2 col-lg-offset-5 wide-block-title">
            <h1 class="wide-block-title-green">Partners</h1>
        </div>
    </div>
    <br class="clear">
    <div class="container">
        <div class="col-md-12 slide-holder" id="partners-items">
            <div class="slide-item">
                <a href="#"><img src="/assets/images/temp/partners/01.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item">
                <a href="#"><img src="/assets/images/temp/partners/02.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item">
                <a href="#"><img src="/assets/images/temp/partners/03.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item">
                <a href="#"><img src="/assets/images/temp/partners/04.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item">
                <a href="#"><img src="/assets/images/temp/partners/01.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item">
                <a href="#"><img src="/assets/images/temp/partners/04.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item">
                <a href="#"><img src="/assets/images/temp/partners/02.jpg" alt="Project Thmb"></a>
            </div>
        </div>
    </div>
</section>`);

/**
 Compile the template
 */
const containerPartners = $('#container-partners'), partnerTemplate = $('#partners-template');
const partnerTemplateCompiled = Handlebars.compile(partnerTemplate.html());

const partnerData = {}
containerPartners.empty().append(partnerTemplateCompiled(partnerData));

$(function () {
    $("#partners-items").owlCarousel({
        items: 4, lazyLoad: true, autoPlay: true
    });
})
