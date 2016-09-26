/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $txt = $(".container__count-text");
  var $btn1 = $("container__btn increment")
  var $btn2 = $("container__btn decrement")

  $btn.click(function(){
    num = $(this).hasClass("increment") ? 1 : -1;
    count += (num);
    if( count < 0 ) count = 0;
    if( count > maxCount ) count = maxCount;
    $txt.text(count);
  })


  $btn1.mouseover(
    function(){
      $(this).stop().fadeTo(btn_fade_spd,1);
    }
  )



  $btn.mouseout(
    function(){
      $(this).stop().fadeTo(btn_fade_spd,1)
    }
  );

  $btn1.click(
    function(){
      $(this).css("opacity","0.2")
      $(this).stop().fadeTo(btn_fade_spd,1);
    }
  );
)

})//end function
