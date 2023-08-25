$(function () { //문서 로드 실행 1번만
    /**
     * @selectLang
     * @btnLang
     * 
     */
    $('#btnLang').click(function () {
        url = $('#selectLang').val();
        window.open(url);
    })

    const mainSlide = new Swiper(".sc-slide .swiper", {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },//자동재생
        pagination: {
            el: ".fraction",
            type: "fraction"
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        on: {
            "slideChange": function () {
                if (this.realIndex >= 5) {
                    $('.sc-slide .btn-nav.citizen').addClass('active').siblings().removeClass('active');
                } else {
                    $('.sc-slide .btn-nav.news').addClass('active').siblings().removeClass('active');
                }
            }
        }
    });

    $('.sc-slide .btn-nav').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).hasClass('news')) {
            mainSlide.slideToLoop(0)
        } else {
            mainSlide.slideToLoop(5)
        }
    })

    $('.sc-slide .autoplay').click(function () {
        if ($(this).hasClass('on')) {
            mainSlide.autoplay.start();
            $(this).attr('aria-label', '자동재생정지')
        } else {
            mainSlide.autoplay.stop();
            $(this).attr('aria-label', '자동재생적용')
        }
        $(this).toggleClass('on')
    })



    const bannerSlide = new Swiper(".banner-slide", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 43,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".fraction",
            type: "fraction"
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });

    $('.banner-slide .autoplay').click(function () {
        if ($(this).hasClass('on')) {
            bannerSlide.autoplay.start();
            $(this).attr('aria-label', '자동재생정지')
        } else {
            bannerSlide.autoplay.stop();
            $(this).attr('aria-label', '자동재생적용')
        }
        $(this).toggleClass('on')
    })


    $('.sc-related .related').click(function () {
        if ($(this).hasClass('active')) {
            $('.sc-related .related').removeClass('active').siblings('.sub-area').stop().slideUp()
        } else {
            $('.sc-related .related').removeClass('active').siblings('.sub-area').stop().slideUp();
            $(this).addClass('active').siblings('.sub-area').stop().slideDown();
        }
    })

    /**
     * @tab === 9
    * @e.shiftKey == shift 눌렀는지 안 눌렀는지 - > true(누름),false(안 누름)
     */
    $('.sc-related .sub-area li:first-child').keydown(function (e) {
        key = e.keyCode
        if (key === 9 && e.shiftKey) {
            $('.sc-related .related').removeClass('active').siblings('.sub-area').stop().slideUp();
        }
    })
    $('.sc-related .sub-area li:last-child').keydown(function (e) {
        key = e.keyCode
        if (key === 9 && !e.shiftKey) {
            $('.sc-related .related').removeClass('active').siblings('.sub-area').stop().slideUp();
        }
    })


    $(window).scroll(function () {
        curr = $(window).scrollTop();
        if (curr > 0) {
            $('.fixed-top').addClass('show')
        } else {
            $('.fixed-top').removeClass('show')
        }
    })
    
    $(window).trigger('scroll');

    $('.fixed-top .btn-top').click(function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

}) //end