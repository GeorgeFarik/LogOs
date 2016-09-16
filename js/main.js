function get(a) {
    return document.getElementById(a);
}

function sel(a) {
    return document.querySelector(a);
}

$(document).ready(
        function () {
            dotNav(); // викликаємо функцію одразу, щоб як тілкьи загружався док. вона вже могла викор.
            $(window).bind("scroll", function (event) {
                dotNav();
            })
        }
    )
    //==================scrollify=====================


$(document).ready(function () {
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

                /*if (currentSlide.context.id == "section_Two" )  {

                   
            }*/

            }






            
            , after: function () {}
            , afterResize: function () {}
            , afterRender: function () {}
        })
    })
});
//-----------------------------------------------------

//==================Begining=====================

$(window).scroll(function () {

    var y = $(this).scrollTop();
    if (y > 200 && y < 350) {
        $('#welcome')[0].play();

    }

    if ($(this).scrollTop() > 0) {
        //---------------------------------------------------------------------------------- 
        $('.begin_right').animate({
                'width': 0
            }, {
                duration: 1000
                , specialEasing: {
                    width: "swing",

                }
            })
            //----------------------------------------------------------------------------------  
        $('.begin_spinLoad').animate({
                'top': '0%'
                , 'opacity': 0
            , }, {
                duration: 800
                , specialEasing: {
                    width: "swing"
                , }
            })
            //---------------------------------------------------------------------------------- 
        $('.begin_useAudio').animate({
                'left': '-20%'
                , 'opacity': 0
            }, {
                duration: 800
                , specialEasing: {
                    width: "swing"
                , }
            })
            //---------------------------------------------------------------------------------- 
        $('.beginScroll').animate({
                'left': '-20%'
                , 'opacity': 0
            }, {
                duration: 800
                , specialEasing: {
                    width: "swing"
                , }

            })
            //---------------------------------------------------------------------------------- 
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
//-------------------------------------------------------

//=======================Parallax fx===============================================================================


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
    //----------------------------------------------------------

//=========================animation when section in view=======================================================
/*
function dotNav() {
    var nav1 = $('#section_One');
    var nav2 = $('#section_Two');
    var nav3 = $('#section_Three');
    var nav4 = $('#section_Four');
    var nav5 = $('#section_Five');
    var nav6 = $('#section_Six');
    var nav7 = $('#section_Seven');
    var nav8 = $('#section_Eight');
    var nav9 = $('#section_Nine');
    var section1Top = 925;
    if (nav2.length) {
        var section2Top = $("#section_Two").offset().height - (($("#section_Three").offset().height - $("#section_Two").offset().height) );
        alert('section2Top')
    }
    if (nav3.length) {
        var section3Top = $("#section_Three").offset().height - (($("#section_Four").offset().height - $("#section_Three").offset().height) / 2);
    }
    if (nav4.length) {
        var section4Top = $("#section_Four").offset().top - (($("#section_Five").offset().top - $("#section_Four").offset().top) / 2);
    }
    if (nav5.length) {
        var section5Top = $("#section_Five").offset().top - (($("#section_Six").offset().top - $("#section_Five").offset().top) / 2);
    }
    if (nav6.length) {
        var section6Top = $("#section_Six").offset().top - (($("#section_Seven").offset().top - $("#section_Six").offset().top) / 2);
    }
    if (nav7.length) {
        var section7Top = $("#section_Seven").offset().top - (($("#section_Eight").offset().top - $("#section_Seven").offset().top) / 2);
    }
    if (nav8.length) {
        var section8Top = $("#section_Eight").offset().top - (($("#section_Nine").offset().top - $("#section_Eight").offset().top) / 2);
    }
    if (nav9.length) {
        var section9Top = $("#section_Nine").offset().top - (($(document).height() - $("#section_Nine").offset().top) / 2);
    }
*/
function dotNav() {
    //    var nav1 = $('#section_One').height();
    //    var nav2 = $('#section_Two').height();
    //    var nav3 = $('#section_Three');
    //    var nav4 = $('#section_Four');
    //    var nav5 = $('#section_Five');
    //    var nav6 = $('#section_Six');
    //    var nav7 = $('#section_Seven');
    //    var nav8 = $('#section_Eight');
    //    var nav9 = $('#section_Nine');
    var y = $(window).height();
    var section1 = y
    var section2 = y * 2
    var section3 = y * 3
    var section4 = y * 4
    var section5 = y * 5
    var section6 = y * 6
    var section7 = y * 7
    var section8 = y * 8
    var section9 = y * 9


    //-------------------------------------------------------------------------------------------------------------------------
    if ($(document).scrollTop() > y) {
       $('#section_move')[0].play();  
    }
    if ($(document).scrollTop() == section2) {
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
    
    
    if ($(document).scrollTop() == section3) {}
   

    if ($(document).scrollTop() == section4) {
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
    }
    
    if ($(document).scrollTop() == section5) {
        $('#fixedLogos').attr('id', 'angryLogos');
        $('#computer').attr('id', 'angryLogos');
        
        $('.eye').addClass('angryEye')
        
        $.scrollify.disable()
        $('body').addClass('stop-scrolling')

        $('#test1_saarcasm')[0].play()
    }
    if ($(document).scrollTop() > section5){
         $.scrollify.enable();
    }
    if ($(document).scrollTop() == section6) {
        $('#test1_fat')[0].play()
    }
    if ($(document).scrollTop() == section7) {
         $.scrollify.disable();
       $('body').addClass('stop-scrolling')
        $('.game_led').animate({
            'left':0
        },{
            duration: 2200
            , complete: function () {
                $('#test2')[0].play();
            }})
    }
    if ($(document).scrollTop() == section8) {
        $('#theEnd')[0].play();
    }
    

}
//--------------------------------------------------

//============================================================================================================================

$(document).scroll(function () {
    console.log($(document).scrollTop());

})