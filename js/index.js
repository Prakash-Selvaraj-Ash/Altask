//2.Update header style + Scroll to Top
function headerStyle() {
    if($('.main-header').length){
        var windowpos = $(window).scrollTop();
        if (windowpos >= 150) {
            $('.main-header').addClass('fixed-header');
            $('.scroll-to-top').fadeIn(300);
        } else {
            $('.main-header').removeClass('fixed-header');
            $('.scroll-to-top').fadeOut(300);
        }
    }
}	
headerStyle();

//3.Submenu Dropdown Toggle
if($('.main-header li.dropdown ul').length){
    $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
    
    //Dropdown Button
    $('.main-header li.dropdown .dropdown-btn').on('click', function() {
        $(this).prev('ul').slideToggle(500);
    });
    
    
    //Disable dropdown parent link
    $('.navigation li.dropdown > a').on('click', function(e) {
        e.preventDefault();
    });
}

//5.Revolution slider
function revolutionSliderActiver () {
    if ($('.rev_slider_wrapper #slider1').length) {
        jQuery("#slider1").revolution({
            sliderType:"standard",
            sliderLayout:"auto",
            dottedOverlay:"yes",
            delay:5000,
            navigation: {
                arrows:{enable:true,
                        left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    }

                } 
            }, 
            responsiveLevels: [1240, 767, 450, 300],
            gridwidth: [1170, 940, 720, 480],
            gridheight: [750, 750, 750, 500],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    };
}

/* ========================When document is Scrollig, do===================== */
	
$(window).on('scroll', function() {
    // add your functions
    (function ($) {
        headerStyle();
    })(jQuery);
});


	
/* ========================When document is loaded, do===================== */
	
$(window).on('load', function() {
    // add your functions
    (function ($) {
        revolutionSliderActiver();
    })(jQuery);
});