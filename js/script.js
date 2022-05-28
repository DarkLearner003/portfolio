$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>100){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
        if(this.scroll>500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");

        }
    });

    // slide-up Script
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop:0});
    });

    // typing animatio
    var typed=new Typed(".typing",{
        strings:["Just a Guy","Billionaire","Playboy","Genius"],
        typeSpeed:80,
        backSpeed:60,
        loop:true
    })
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel Scipt
    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 1,
                nav: false
            },
            1000:{
                items: 1,
                nav: false
            }
        }
    })

});