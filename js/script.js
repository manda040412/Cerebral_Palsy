/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== popup image ====================*/
    document.querySelectorAll('.gallery .box .dream img').forEach(image =>{
        image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        }
    });

    document.querySelector('.popup-image span').onclick = () =>{
        document.querySelector('.popup-image').style.display = 'none';
    }
      
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', windows.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading, .journey-container, .inspi-text, .aisyah-content, .aisyah-img, .alfiana-content, .alfiana-img, .safrina-content, .safrina-img, inspi h3', {origin: 'top'})
ScrollReveal().reveal('.home-img, .about-img, .about3-container, .about4-content, .about5-content, .inspi-text, .gallery', {origin: 'bottom'})
ScrollReveal().reveal('.home-img, .about-content, .about2-content, .inspi-img', {origin: 'left'})
ScrollReveal().reveal('.home-img, about5-container, .see-more-button, .about2-img', {origin: 'right'})

/*==================== typed js ====================*/