function navMobile() {
    
    $('.toggle-nav').on('click', function() {
        $('.toggle-nav').toggleClass('active');
        $('.mobile-nav').toggleClass('open');
        return false;
    })

}

jQuery(document).ready(function($) {

    // Open nav mobile
    navMobile();

    // Animoate on scroll
    AOS.init({
        duration: 650,
        once: true
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        mouseDrag:false,
        autoplay:true,
        animateOut: 'slideOutLeft',
        responsive:{
            0:{
                items:1,
                autoplay:true,
                autoplayTimeout: 3000
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

})