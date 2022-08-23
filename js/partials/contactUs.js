/* Registering a partial with the name `nav` and the content of the partial is the html code. */
Handlebars.registerPartial('contectUs',
    `
    <h3>Contact Us :</h3>
    <div class="clearfix"></div>
    <form id="contactUs">
        <div class="form-group">
            <input class="form-control" name="full_name" id="footer-contact-name"
                placeholder="Your Name" type="text">
        </div>
        <div class="form-group">
            <input class="form-control" name="email" id="footer-contact-email"
                placeholder="Email" type="email">
        </div>
        <div class="form-group">
            <textarea class="form-control" name="content" id="footer-contact-message"
                placeholder="Content Message" rows="7"></textarea>
        </div>
        <button class="btn btn-lg btn-red" type="submit">Submit <i
                class="fa fa-comment"></i></button>
    </form>
`);


/**
 Compile the template
 */
const containerContact = $('#container-contact'), contactTemplate = $('#contact-template');
const contactTemplateCompiled = Handlebars.compile(contactTemplate.html());

containerContact.empty().append(contactTemplateCompiled({}));

// let's notify our breadcrumb for current url
const currentBreadcrumb = new CustomEvent('currentBreadcrumb', {
    bubbles: true, detail: {
        currentBreadcrumb: 'Contact Us',
        parent: null
    }
});
console.log(currentBreadcrumb);
// let's dispatch it !
document.dispatchEvent(currentBreadcrumb)


let contactForm = document.getElementById('contactUs');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // let's get going and get the form from the
    // forms object
    let formData = document.forms.contactUs,
        formDataObject = new FormData(formData);

    // we need somehow to save the data
    // let's use local storage browser,
    for (let value of formDataObject.entries()) {
        localStorage.setItem(value[0], value[1]);
    }

    alert(`${localStorage.getItem('full_name')}, thank you for contact us, please check your email,`);

    location.href = '/';

});
