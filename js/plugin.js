/*gloabal $, document, alert, console */

$(document).ready(function (){
    'use strict'
    $('.header .carousel-inner .item').height($(window).height() - $('.navbar').height());
    $(window).resize(function () {
        $('.header .carousel-inner .item').height($(window).height() - $('.navbar').height());
    })
        
    $('.our-skills .progress:first-of-type .progress-bar').animate({
        width: '95%'
    }, 400)
    $('.our-skills .progress:nth-of-type(2) .progress-bar').animate({
        width: '90%'
    }, 400)
    $('.our-skills .progress:nth-of-type(3) .progress-bar').animate({
        width: '60%'
    }, 400)
    $('.our-skills .progress:last-of-type .progress-bar').animate({
        width: '75%'
    }, 400)

    //Start Option Color Button

    $('.tool-box .fa-cog').click(function () {
        $('.tool-box .color-option').slideToggle(500);
        $(this).toggleClass('fa-spin')
    })

    $('.tool-box .color-option button').on('click', function (e) {
        e.preventDefault();
        $('h1, h2, h3, h4, h5').css({
            color: $('.tool-box .color-option input').val()
        })
        $('.navbar').css({
            background: $('.tool-box .color-option input').val()
        });
    
    });

    // Start Go To Top Button

    $(window).on('scroll', function () {
        //Sorthand Conditional Function
        $(window).scrollTop() >= 400 ? $('.go-to-top').fadeIn(800) : $('.go-to-top').fadeOut(800)
        //Longhand Conditional function
        // if ($(window).scrollTop() >= $('.testimonials').offset().top) {
        //     $('.go-to-top').fadeIn(800)
        // } else {
        //     $('.go-to-top').fadeOut(800)
        // }
    });

    $('.go-to-top i').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

    $('.go-to-top i').on({
        mouseenter: function () {
            $('.go-to-top .title').fadeIn(500)
        },
        mouseleave: function () {
            $('.go-to-top .title').fadeOut(500)
        }
    });

    // Start Collapsed Modify

    $('.faq-questions .panel:first-of-type .panel-title a').on('click', function () {
        $(this).toggleClass('open')
    })

    //Initialization Nicescroll

    $('html').niceScroll({
        zindex:999,
        cursorcolor: 'rgb(101, 219, 228)',
        cursorborder: "none",
        cursorborderradius: 0,
        cursorwidth: 7,
    })

    //Custom The Carousel

    $('.carousel').carousel({
        interval: 3000
    });
    
    // Counter Number
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Initialization WOW.js

    new WOW().init();

});

// Start Loading Screen

$(window).on('load', function () {
    $('.load-screen .cont').fadeOut(1000, function () {
        $(this).parent('.load-screen').fadeOut(1000, function () {
            $('body').css('overflow','auto');
            $(this).remove();
        })
    });
    $('html, body').animate({
        scrollTop: 0
    }, 1000)
})