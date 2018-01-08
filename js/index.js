/*global $, alert, console*/
$(document).ready(function()
{
    'use strict';

    /* Variables */
    var header=$('.header');
    var bxSlider= $('.bxslider');
    var center = ($(window).width() - $('.read-more').width()) / 2;

    /* header resize image*/
    header.height($(window).height());
    $(window).resize(function()
    {
        header.height($(window).height());

        /*center Bxslider*/

        bxSlider.each(function(){
          $(this).css('paddingTop',($(window).height() - $(".bxslider div").height()) / 2);
      });

        /*center button read-more*/
        $('.read-more').css('left', center);

    });

    /* add li active class*/

    $('.links li a').on("click", function()
    {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    /*bxslider*/

    $(function(){
      bxSlider.bxSlider({
        /*
        mode: 'fade',
        captions: true,
        slideWidth: $(window).width()*/
        pager:false
    });
  });

    /*center Bxslider*/
    bxSlider.each(function()
    {
     $(this).css('paddingTop', ($(window).height() - $('.bxslider div').height()) / 2);

 });




    /*center button*/
    $('.read-more').css('left', center);

    console.log(center);
    console.log($(window).width());


    /* scroll Smooth*/
    $(".links li a").on("click", function()
    {
        $("html , body").animate({
            scrollTop :  $("#"+ $(this).data("value")).offset().top },1000);
    });



    /*  Testimonials*/
    (function testimonials(){


        $('.slide .active').each(function () {

            if( !$(".slide .active").is(":last-child"))
            {
                $(this).delay(3000).fadeOut(2000,function()
                {
                 $(this).removeClass("active").next().addClass("active").fadeIn(2000);
                   testimonials();
               });
            }
            else
            {
                $(this).delay(3000).fadeOut(2000,function(){
                    $(this).removeClass('active');
                    $(".slide div").eq(0).addClass("active").fadeIn(1000);
                });
            }

        });

    }());

    /* shuffle*/

    var mixer = mixitup('#container');


    // Adjust Shuffle Links

    $('.shuffle li').click(function () {

        $(this).addClass('selected').siblings().removeClass('selected');

    });

    /* nice scroll*/
    $("body").niceScroll({
        cursorcolor:"#19d9b3",
        cursorwidth: "7px", 
        cursorborder: "1px solid #19d9b3",
        background: "rgb(221, 221, 221)",
        cursorwidth:"12px"
    });


});
