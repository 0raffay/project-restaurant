

//navbar
const burger = document.querySelector('.burger-icon')
const header = document.querySelector("header")
const navlist = document.querySelector('.nav-list')
var nav = 0;

burger.addEventListener('click', ()=>{
    if(nav == 0){
        navlist.style.display = "block"
        nav = nav + 1
    }
    else{
        navlist.style.display = "none"
        nav = nav - 1
    }

    header.addEventListener('click', function(){
        navlist.style.display = "none"
    })
})

// Form Success

const feedbackForm = document.querySelector('.feedback-container form');
const contactForm = document.querySelector('.contact-container form');

function contactSuccess(event) {
    event.preventDefault();
    if (contactForm.checkValidity()) {
        document.querySelector('.contact-container').style.display = "none";
        document.getElementById('contact-success').style.display = "block";
    } else {
        contactForm.reportValidity();
    }
};

function feedbackSuccess(event){
    event.preventDefault();
    if (feedbackForm.checkValidity()) {
        document.querySelector('.feedback-container').style.display = "none";
        document.getElementById('feedback-success').style.display = "block";
    } else {
        feedbackForm.reportValidity();
    }
};

// for alphabet values only

const input = document.querySelector('input[type="text"]');
input.addEventListener('input', function(event) {
    const regex = /[^a-zA-Z]/g;
    input.value = input.value.replace(regex, '');
});

