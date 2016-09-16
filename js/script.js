/*$(document).ready(
    function () {
        dotNav(); // викликаємо функцію одразу, щоб як тілкьи загружався док. вона вже могла викор.
        $(window).bind("scroll", function (event) {

            dotNav();
        })
    })*/
/*$(document).ready(function() {
    $('#fullpage').fullpage();
});*/

function get(a) {
    return document.getElementById(a);
}

function sel(a) {
    return document.querySelector(a);
}



//==============================

$(window).scroll(function () {

    if ($(this).scrollTop() > 0) {
        //        -----------------------------------------
        $('.begin_right').animate({
                'width': 0
            }, {
                duration: 1000
                , specialEasing: {
                    width: "swing",

                }
            })
            //        ----------------------------------------- 
        $('.begin_spinLoad').animate({
                'top': '0%'
                , 'opacity': 0
            , }, {
                duration: 800
                , specialEasing: {
                    width: "swing"
                , }
            })
            //        -----------------------------------------
        $('.begin_useAudio').animate({
                'left': '-20%'
                , 'opacity': 0
            }, {
                duration: 800
                , specialEasing: {
                    width: "swing"
                , }
            })
            //        -----------------------------------------
        $('.beginScroll').animate({
                'left': '-20%'
                , 'opacity': 0
            }, {
                duration: 800
                , specialEasing: {
                    width: "swing"
                , }

            })
            //        -----------------------------------------
        $('.begin_scroll_down').animate({
            'left': '-20%'
            , 'opacity': 0
        }, {
            duration: 500
            , specialEasing: {
                width: "swing"
            , }

        })
        $('#logOS').animate({
            'margin-right': 0
        }, {
            duration: 2600
        })

        $('.eye').animate({
            'margin-right': 0
        }, {
            duration: 2600
        })

        $('.eyeball').animate({
            'margin-right': 0
        }, {
            duration: 2600
        })

        $('.compLight').animate({
            'margin-right': 0
        }, {
            duration: 2600
        })




    }
});
$(document).on('scroll', function () {
    var scrolled = $(document).scrollTop();
    $("#parallax-bg1").css("top", (0 - (scrolled * 0.2)) + "px");
    $("#parallax-bg2").css("top", (0 - (scrolled * 0.5)) + "px");
    $("#parallax-bg4").css("top", (0 - (scrolled * 0.7)) + "px");
    $("#parallax-bg5").css("top", (0 - (scrolled * 0.25)) + "px");
    $("#parallax-bg6").css("top", (0 - (scrolled * 0.1)) + "px");
    $(".deadBody").css("top", (4400 - (scrolled * 0.1)) + "px");
    $(".cross").css("top", (3800 - (scrolled * 0.15)) + "px");
    $(".test_parallax_1").css("top", (5300 - (scrolled * 0.5)) + "px");
    $(".test_parallax_2").css("top", (7200 - (scrolled * 0.6)) + "px");
    $(".test_parallax_3").css("top", (9800 - (scrolled * 0.7)) + "px");
    $(".test_parallax_2_2").css("top", (10600 - (scrolled * 0.7)) + "px");
})




//=======================sections



/*if ($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top) {

    } else if ($(document).scrollTop() >= 600 && $(document).scrollTop() <= 630) {

        $('#type')[0].play();
        $('.cube').animate({
            'left': 0
        }, {
            duration: 1200
            , complete: function () {

                $('.ledwrite_user').attr('id', 'cubemoveArea');
                $('.led').attr('id', 'newCube');
                $('.ledwrite').addClass('cubemove');
                $('.confirm').addClass('cubemoveConfirm');

                var scrollPosition = [
  self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
  
                    , self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
];
                var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
                html.data('scroll-position', scrollPosition);
                html.data('previous-overflow', html.css('overflow'));
                html.css('overflow', 'hidden');
                window.scrollTo(scrollPosition[0], scrollPosition[1]);
                if ($('#ledwrite_user').value == "text") {
                    alert('1')
                }
            }
        });

    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top) {

    } else if ($(document).scrollTop() >= section4Top) {

    }
}
*/
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200 && y < 350) {
        $('#welcome')[0].play();

    }
})

//$(document).scroll(function () {
//        var y = $(this).scrollTop();
    
        
//        
//            $('#type')[0].play();
//            $('#metall')[0].play();
//
//            $('.cube').animate({
//                'left': 0
//            }, {
//                duration: 1200
//                , complete: function () {
//
//                    $('.ledwrite_user').attr('id', 'cubemoveArea');
//                    $('.led').attr('id', 'newCube');
//                    $('.ledwrite').addClass('cubemove');
//                    $('.confirm').addClass('cubemoveConfirm');
//                }
//            })
//
//            $.scrollify.disable()
//
//            $('body').addClass('stop-scrolling')
//        })
//        $('.confirm').click(function () {
//            var text = $('.ledwrite_user').val();
//            if (text == "text") {
//                $('#computer').attr('id', 'fixedLogos');
//                $('#hello_human')[0].play();
//                $.scrollify.enable();
//                //            $.scrollify.next();
//                $.scrollify.move("#section_Four");
//
//                $('body').removeClass('stop-scrolling')
//            } else {
//                $('#stupid')[0].play();
//            }
//        })
    
    //================================TESTS==============

//-----------------test 1------------
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y == 3524) {
        $('#metall')[0].play();
        $.scrollify.disable()

        $('body').addClass('stop-scrolling')

        $('.push_button').animate({
            'left': 0
        }, {
            duration: 1200
            , complete: function () {
                $('#test1')[0].play();
            }
        })

    };

    $(".button_part_2").one('mouseover', function () {
        $('#test1_what')[0].play();
        $('#test1')[0].pause()
    })

    var counter = 1;
    $(".button_part_2").click(function () {
        if (counter == 1) {
            $('#test1_dont')[0].play();
            counter = 0

        }

    })
    $(".button_part_2").mouseout(function () {
        counter = 2
    })
    $(".button_part_2").click(function () {

        if (counter == 2) {
            $.scrollify.enable();
            $.scrollify.move("#section_Six");
            $('body').removeClass('stop-scrolling')
                //             $.scrollify.next();
            $(".button_part_2").addClass('button_part_2_2')
            $('.span_1').css({
                display: 'none'
            })
            $('.span_2').css({
                display: 'block'
            })
            $('#test1_stop')[0].play()

        }


    })
    if (y >= 4166) {

        $('#fixedLogos').attr('id', 'angryLogos');
        $('#computer').attr('id', 'angryLogos');
        $('.eye').addClass('angryEye')
    }
    if (y == 4405) {
        $.scrollify.disable()
        $('body').addClass('stop-scrolling')

        $('#test1_saarcasm')[0].play()
    }
    if (y >= 4471) {
        $.scrollify.enable();



    }
    if (y == 5286) {
        $('#test1_fat')[0].play()
    }
    if (y == 6167) {
        $('.game_led').animate({
            'left':0
        },{
            duration: 2200
            , complete: function () {
                $('#test2')[0].play();
            }})
            
        
    }
});






//================================TESTS END==============

//$(document).scroll(function () {
//    console.log($(document).scrollTop());
//})








//used plugin scrollify
$(document).ready(function(){
$(function () {
    $.scrollify({
        section: "section"
//        , sectionName: "section-name"
        , interstitialSection: ""
        , easing: "swing"
        , scrollSpeed: 2100
        , offset: 0
        , scrollbars: true
        , standardScrollElements: ""
        , setHeights: true
        , overflowScroll: true
        , before: function () {
            var currentSlide = $.scrollify.current();
            // log the id of slide  
			console.log(currentSlide);
			
            if (currentSlide == $.scrollify.sectionName'section_Three'){
                
            $('#type')[0].play();
            $('#metall')[0].play();

            $('.cube').animate({
                'left': 0
            }, {
                duration: 1200
                , complete: function () {

                    $('.ledwrite_user').attr('id', 'cubemoveArea');
                    $('.led').attr('id', 'newCube');
                    $('.ledwrite').addClass('cubemove');
                    $('.confirm').addClass('cubemoveConfirm');
                }
            })

            $.scrollify.disable()

            $('body').addClass('stop-scrolling')
        }
        $('.confirm').click(function () {
            var text = $('.ledwrite_user').val();
            if (text == "text") {
                $('#computer').attr('id', 'fixedLogos');
                $('#hello_human')[0].play();
                $.scrollify.enable();
                //            $.scrollify.next();
                $.scrollify.move("#section_Four");

                $('body').removeClass('stop-scrolling')
            } else {
                $('#stupid')[0].play();
            }
        })
            }
        
        , after: function () {}
        , afterResize: function () {}
        , afterRender: function () {}
    })
})});