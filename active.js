(function($){'use strict';var hami_window=$(window);hami_window.on('load',function(){$('#preloader').fadeOut('1000',function(){$(this).remove();});});if($.fn.classyNav){$('#hamiNav').classyNav();}
if($.fn.owlCarousel){var welcomeSlider=$('.welcome-slides');welcomeSlider.owlCarousel({items:1,loop:true,autoplay:true,smartSpeed:9000,autoplayTimeout:7000})
welcomeSlider.on('translate.owl.carousel',function(){var layer=$("[data-animation]");layer.each(function(){var anim_name=$(this).data('animation');$(this).removeClass('animated '+anim_name).css('opacity','0');});});$("[data-delay]").each(function(){var anim_del=$(this).data('delay');$(this).css('animation-delay',anim_del);});$("[data-duration]").each(function(){var anim_dur=$(this).data('duration');$(this).css('animation-duration',anim_dur);});welcomeSlider.on('translated.owl.carousel',function(){var layer=welcomeSlider.find('.owl-item.active').find("[data-animation]");layer.each(function(){var anim_name=$(this).data('animation');$(this).addClass('animated '+anim_name).css('opacity','1');});});}
if($.fn.owlCarousel){var testiSlide=$('.testimonial-slide');testiSlide.owlCarousel({items:4,margin:50,loop:true,autoplay:true,smartSpeed:9000,dots:true,responsive:{0:{items:1},768:{items:2},992:{items:3},1200:{items:4}}});}
$('.portfolio-menu button.btn').on('click',function(){$('.portfolio-menu button.btn').removeClass('active');$(this).addClass('active');})
if($.fn.magnificPopup){$('.video-play-btn').magnificPopup({type:'iframe'});}
if($.fn.tooltip){$('[data-toggle="tooltip"]').tooltip();}
if(hami_window.width()>767){new WOW().init();}
if($.fn.jarallax){$('.jarallax').jarallax({speed:0.99});}
if($.fn.scrollUp){hami_window.scrollUp({scrollSpeed:9000,scrollText:'<i class="arrow_carrot-up"</i>'});}
if($.fn.counterUp){$('.counter').counterUp({delay:15,time:1500});}
$('a[href="#"]').on('click',function($){$.preventDefault();});if($.fn.countdown){$("#clock").countdown("2021/10/10",function(event){$(this).html(event.strftime("<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Mins</span></div> <div>%S <span>Sec</span></div>"));});}})(jQuery);