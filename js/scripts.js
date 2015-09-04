$(document).ready(function() {
 
  $('#carousel-1').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
    
    $(window).on("load resize", function(){
    $(".header-background").css("height",window.innerHeight);
    var x = $('.blog-text').innerHeight();
        
    //$(".blog-img").css({"height": x})

    
    })
    
    $('#blog .item img').each(function(){
        var imgSrc=$(this).attr('src');
        $(this).closest('.item').css({'background-image':'url('+imgSrc+')'});
        $(this).css({'opacity': '0'});
    
    })
    
    $('#blog .blog-img img').each(function(){
        var imgSrc=$(this).attr('src');
        $(this).closest('.static-img').css({'background-image':'url('+imgSrc+')'});
        $(this).css({'opacity':'0'})
    
    })
    
    
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    })
    
    $('nav a,.down-button a').bind('click',function(){
        $('html, body').stop().animate({
            scrollTop:$($(this).attr('href')).offset().top-50
        },1500,'easeInOutExpo');
        event.preventDefault();
    })
    
    $(window).stellar();
    
    new WOW().init();
    
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
    
     $(function(){
      $(".typing").typed({
        strings: ["website", "App", "Logo","banner"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
  });
 
});