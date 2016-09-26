/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $inc = $(".increment");
  var $dec = $(".decrement");
  var $txt = $(".container__count-text");
  var $btn = $("container__btn increment");




  function countUp(){
    if( count < maxCount){
      count = count + 1;
    }
    countAction();
  }

  function countDown(){
    if( count > 0){
      count = count - 1;
    }
    countAction();
  }

  function countAction(){
    $txt.text(count);
  }

  $inc.click(
    function(){
      countUp();
    }
  )

  $dec.click(
    function(){
      countDown();
    }
  )

  $btn.mouseover(
    function(){
      $(this).stop().fadeTo(btn_fade_spd,0.5);
    }
  );



})//end function
