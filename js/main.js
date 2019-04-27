$(function() {
    $(document).on('click', '.js-shower', function() {
        $(this).find('img').toggle('slow');
    })
})
$(function() {
    // global js
    //  config owl-carsoul
    $('.home-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    });
    $('.owl-example').owlCarousel({
        items: 6,
        loop: true,
        dots: false,
        nav: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin: 10,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            }
        }
    })
    // mobile menu event
    $(document).on('click', '.js-nav-menu', function() {
        $(this).next('.mobile-menu ').addClass('open');
    })
    $(document).on('click', '.js-close-menu', function() {
        $(this).parent('.mobile-menu ').removeClass('open');
    })
    $(document).on('click', '.js-m-nav>li', function(e) {
        if($(this).find('ul').length >0) {
            e.preventDefault();
            $(this).toggleClass('show');
        }
    })
})
$(function() {
    // home page news event
    // load the first news
    if($('.js-news-img').length >0 ) {
        $('.js-news-img').attr('src', $('.news-modal-item').eq(0).data('img'));
    }
    $(document).on('click', '.news-modal-item', function() {
        var $imgSrc = $(this).data('img');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.js-news-img').attr('src', $imgSrc);
    })
})