document.getElementById('check-icon').addEventListener('click', function () {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});

// AOS Initialization
AOS.init();

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }  
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 10000);
}

window.onload = function() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide img');

    function adjustSliderHeight() {
        let maxHeight = 0;

        slides.forEach((image) => {
            const imgHeight = image.clientHeight;
            if (imgHeight > maxHeight) {
                maxHeight = imgHeight;
            }
        });

        slider.style.height = maxHeight + 'px';
    }

    slides.forEach((image) => {
        if (image.complete) {
            adjustSliderHeight();
        } else {
            image.onload = adjustSliderHeight;
        }
    });

    window.onresize = adjustSliderHeight;
};
