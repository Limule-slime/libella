function navMobile() {
    
    $('.toggle-nav').on('click', function() {
        $('.toggle-nav').toggleClass('active');
        $('.mobile-nav').toggleClass('open');
        return false;
    })

}

function stickyHeader() {

    $(window).on('scroll', function(){

        if ( $(window).scrollTop() > 125 ) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }

    })
}

function scrollTop() {

    $(window).on('scroll', function(){

        if ( $(window).scrollTop() > 800 ) {
            $('.scroll-top-top').addClass('show');
        } else {
            $('.scroll-top-top').removeClass('show');
        }

    })

    $('.scroll-top-top').on('click', function(){
        $('body, html').scrollTop(0);
        return false;
    })
}

jQuery(document).ready(function($) {

    // Open nav mobile
    navMobile();

    // Sticky header
    stickyHeader();

    // Scroll to top
    scrollTop();

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