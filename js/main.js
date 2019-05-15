$(function() {
    // JS tab 
    $(document).on('click', '.js-tab-component .attrbute-tab li', function() {
        var $click_li = $(this);
        var $click_li_index = $click_li.index();
        var $component_content = $click_li.parents('.js-tab-component').find('.attrbute-tab-content .tab-content');
        $click_li.siblings().removeClass('active');
        $click_li.addClass('active');
        $component_content.removeClass('active');
        $component_content.eq($click_li_index).addClass('active');
    })
    // tab controller
    $(document).on('click', '.tab-component-handler .handler-item', function(e) {
        e.preventDefault();
        var $_index = $(this).index();
        var $_body = $(this).parents('.tab-component-handler').next('.tab-component-body');
        var $_bodyItem = $_body.find('.body-item');
        $_bodyItem.siblings().removeClass('active');
        $_bodyItem.eq($_index).addClass('active');
    })
    // init scroll controller
    if($('.scroll-silde-controller').length) {
        var $item = $('.silde-body .silde-body-item');
        var $_length = $item.length;
        var html = '';
        for(var i= 0; i< $_length; i++) {
            if(i === 0) {
                html += '<span class="focus"></span>';
            }
            html += '<span></span>';
        }
        $('.scroll-silde-controller').find('.silde-nav .nav-item-tag').html(html);
        // focus handler nav TODO
        $(document).on('scroll', function() {
            console.log(1);
        })
    }
})
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