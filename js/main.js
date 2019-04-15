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
        margin: 10
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