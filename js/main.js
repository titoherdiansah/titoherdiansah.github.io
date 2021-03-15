jQuery(document).ready(function () {
    $('.btn').click(function () {
        $(this).toggleClass("clicks");
        $('.sidebar').toggleClass("show");
    });
    $('.feat-btn').click(function () {
        $('.sidebar .feat-show').toggleClass("show");
        $('.sidebar ul li .first').toggleClass("rotate");
    });
    $('.smooth-scroll').click(function () {
        $('.sidebar ul li .serv-show').toggleClass("show1");
        $('.sidebar ul li .feat-show').removeClass("show");
        $('.sidebar').removeClass("show");
        $('.btn').removeClass("clicks");
    });
    $('.sidebar ul li').click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    "use strict"
    $(".slider").ripples(
        {
            dropRadius: 20,
            perturbance: 0.009,
        }
    );
    $(".words").typed({
        strings: ["<strong class='koperasi'>KOPERASI SERBA USAHA</strong>", "<strong class='ksu'>KARYA SUMBER MAKMUR</strong>"],
        typeSpeed: 50,
        backSpeed: 0,
        backDelay: 500,
        startDelay: 500,
        loop: true,
    });

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 40) {
            $(".logo").addClass('btn-sticky');
        }
        else
            if ($(".logo").hasClass('btn-sticky')) {
                $(".logo").removeClass('btn-sticky')
            }

    });

    $('.galeri').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });

    $("#anggota-pengurus-all").owlCarousel({
        loop: true,
        item: 5,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
        }
       
    });

    jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 3,
            time: 300,
        });
    });

    const inputs = document.querySelectorAll(".input");

    function focusFunc(){
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc(){
        let parent = this.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus");
        }
        
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });

    $('a.smooth-scroll').click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1500,"easeInOutExpo");
    });
    new WOW().init();
});
