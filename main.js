
// Create NodeList with slides
const slides = document.querySelectorAll('.slide');

//Get buttons
const next = document.getElementById('next');
const prev = document.getElementById('prev');

//Option to start slider auto
const auto = true;

//Set interval in ms
const intervalTime = 5000;

let slideInterval;

const nextSlide = () => {

    //Get slide with current class
    const current = document.querySelector('.current');

    //Remove current class
    current.classList.remove('current');

    //Check for next slide
    if (current.nextElementSibling) {
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //Add current to start
        slides[0].classList.add('current');
    }

    setTimeout(()=>current.classList.remove('current'));
};


const prevSlide = () => {

    //Get slide with current class
    const current = document.querySelector('.current');

    //Remove current class
    current.classList.remove('current');

    //Check for next slide
    if (current.previousElementSibling) {
        //Add current to previous sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //Add current to last
        slides[slides.length - 1].classList.add('current');
    }

    setTimeout(()=>current.classList.remove('current'));
};


//Add button events
next.addEventListener('click', e => {

    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

//Auto slide

if (auto) {
    //Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}
