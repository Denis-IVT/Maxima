//Слайдер----------------------------------------------
var slideWidth=1021;
var sliderTimer; 
$(function(){
$('.slider__wrapper').width($('.slider__wrapper').children().size()*slideWidth);
    sliderTimer=setInterval(nextSlide,5000);
    $('.slider').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(nextSlide,5000);
    });
    $('.next__slide').click(function(){
        clearInterval(sliderTimer);
        nextSlide();
        
    });
    $('.prev__slide').click(function(){
        clearInterval(sliderTimer);
        prevSlide();
       
    });
});
function nextSlide(){
    var currentSlide=parseInt($('.slider__wrapper').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slider__wrapper').children().size())
    {
        currentSlide=0;   
    }
    $('.slider__wrapper').animate({left: -currentSlide*slideWidth},1021).data('current',currentSlide);
}

function prevSlide(){
    var currentSlide=parseInt($('.slider__wrapper').data('current'));
    currentSlide--;
    if(currentSlide<0)
    {
        currentSlide=$('.slider__wrapper').children().size()-1;   
    }
    $('.slider__wrapper').animate({left: -currentSlide*slideWidth},1021).data('current',currentSlide);
}


//-----------------------------------------//




$(function Go_skier(){
    var width_events = $(".events-of-the-month_wrapper-bg").width();
    var width_events_cur = width_events+200;
    var duration = width_events_cur/(1000/5000);
    $(".events-of-the-month__skier")
    .animate({
    right:width_events_cur,
    bottom:"-40px",
    step: $(this).css("bottom","110px"),
    step: $(this).css("right","-200px"),
    },duration,arguments.callee ) 
            });
    

$(function Go_men(){
var width_footer = $(".footer").width();
var width_footer_cur = width_footer-277;
var duration = width_footer_cur/(1000/5000);
$(".footer__men_going")
.animate({
left:width_footer_cur
},duration, function() {$(this).css("transform","scaleX(-1)")}) 
.animate({
        left:"20px",
           step: $(this).css("transform","scaleX(1)")
        },duration,  arguments.callee )      
        });

$(function Metr() {
    var metr=0;
    var kkal=0;
    setTimeout(function tick(){
        metr+=1;
        kkal=metr*0.3;
        $(".footer__men__metr").text(metr);
        $(".footer__men_calculation").text(kkal.toFixed(2));
        setTimeout(tick, 1000);
    },1000);

});
//Маска для формы----------------------------------//
//--------------------------------------------------//
$(function Mask(){
    Inputmask.extendDefaults({
        placeholder:""
      });
  $("#weight").inputmask({"mask": "999 кг"}); 
  $("#age").inputmask({"mask": "99 лет"}); 
  $("#height").inputmask({"mask": "999 см"}); 
});

