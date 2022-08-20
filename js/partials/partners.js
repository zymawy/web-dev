/* Registering a partial template. */
Handlebars.registerPartial('partners', ` 
<div class="home-block">
<section class="container-fluid" id="success-partners">
    <div class="container">
    <div class="home-block__title  flexable flexable--center" id="news-block-title">
        <h1 class="red-title block-title flexable no-m no-p">
        <i class="fa-solid fa-handshake"></i>
            For Partners
        </h1>       
    </div> 
        <div class="col-md-12 slide-holder" id="partners-items">
            <div class="slide-item contain">
                <a href="#"><img src="/assets/images/temp/partners/01.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item contain">
                <a href="#"><img src="/assets/images/temp/partners/02.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item contain">
                <a href="#"><img src="/assets/images/temp/partners/03.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item contain">
                <a href="#"><img src="/assets/images/temp/partners/04.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item contain">
                <a href="#"><img src="/assets/images/temp/partners/01.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item contain">
                <a href="#"><img src="/assets/images/temp/partners/04.jpg" alt="Project Thmb"></a>
            </div>
            <div class="slide-item contain">
                <a href="#"><img src="/assets/images/temp/partners/02.jpg" alt="Project Thmb"></a>
            </div>
        </div>
    </div>
</section>
</div>
`);

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
