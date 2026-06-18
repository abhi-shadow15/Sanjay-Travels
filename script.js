// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Active Navbar Link

const navItems = document.querySelectorAll(".nav-links a:not(.whatsapp-btn)");

navItems.forEach(item => {
    item.addEventListener("click", function() {

        navItems.forEach(link => {
            link.classList.remove("active");
        });

        this.classList.add("active");

        navLinks.classList.remove("active");
    });
});



// hero section js============



const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

/* Auto Slide */

setInterval(()=>{
    nextSlide();
},5000);

/* Mobile Swipe */

let startX = 0;

document.querySelector(".hero").addEventListener("touchstart",(e)=>{
    startX = e.touches[0].clientX;
});

document.querySelector(".hero").addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        nextSlide();
    }

    if(endX - startX > 50){
        prevSlide();
    }
});

// =========== hero end ===========


/* =========================
   ABOUT SECTION REVEAL
========================= */

ScrollReveal({
    distance: '80px',
    duration: 1800,
    delay: 200,
    reset: false
});

ScrollReveal().reveal('.about-image', {
    origin: 'left'
});

ScrollReveal().reveal('.about-tag', {
    origin: 'top'
});

ScrollReveal().reveal('.about-content h2', {
    origin: 'right',
    delay: 200
});

ScrollReveal().reveal('.about-content p', {
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.feature-card', {
    origin: 'bottom',
    interval: 150
});

ScrollReveal().reveal('.about-btn', {
    origin: 'bottom',
    delay: 300
});

// =============ELEMENTS REVEAL ON SCROLL================
const elements = document.querySelectorAll(
    '.service-card, .about-btn'
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });

},{
    threshold:0.2
});

elements.forEach(element=>{
    observer.observe(element);
});



/* =========================
   BOOKING SCROLL EFFECT
========================= */

const bookingElements = document.querySelectorAll(
'.booking-content, .booking-feature, .booking-form-box'
);

const bookingObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.2
});

bookingElements.forEach(element=>{

    bookingObserver.observe(element);

});

// ============ BOOKING SCROLL EFFECT END ============
/* =========================
   CONTACT REVEAL EFFECT
========================= */

const contactElements = document.querySelectorAll(
'.contact-card, .contact-form-box'
);

const contactObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.2
});

contactElements.forEach(element=>{

    contactObserver.observe(element);

});